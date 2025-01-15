/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrdersService } from '@/app/core/services/orders.service';
import { environment } from '@/environments/environment.development';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [
    NzSelectModule,
    NzButtonModule,
    CanvasJSAngularChartsModule,
    FormsModule,
  ],
  providers: [],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RevenueComponent implements OnInit, OnChanges {
  base_path = environment.apiUrl;
  selectedPeriod: 'day' | 'week' | 'month' = 'day'; // Lựa chọn mặc định là 'month'
  chartOptions = {}; // Dữ liệu biểu đồ

  constructor(private service: OrdersService) {}

  ngOnInit(): void {
    this.fetchRevenueData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPeriod']) {
      this.fetchRevenueData();
    }
  }

  fetchRevenueData(): void {
    this.service.getAll$.subscribe((data: any) => {
      const orders = data.filter((order: any) => order.status === 'Completed');

      // Khởi tạo các đối tượng doanh thu theo tháng, tuần, ngày
      const revenue = orders.reduce(
        (acc: any, order: any) => {
          const orderDate = new Date(order.updatedAt);
          const day = orderDate.getDate();
          const week = Math.ceil(day / 7);
          const month = orderDate.getMonth() + 1;
          const year = orderDate.getFullYear();

          const dayKey = `${year}-${month < 10 ? '0' + month : month}-${day}`;
          acc.day[dayKey] = (acc.day[dayKey] || 0) + order.total_amount;

          const weekKey = `Tuần ${week}`;
          acc.week[weekKey] = (acc.week[weekKey] || 0) + order.total_amount;

          const monthKey = `${year}-${month < 10 ? '0' + month : month}`;
          acc.month[monthKey] = (acc.month[monthKey] || 0) + order.total_amount;

          return acc;
        },
        { day: {}, week: {}, month: {} }
      );

      // Chọn dữ liệu theo thời gian
      const revenueData = this.formatChartData(revenue);

      // Cập nhật biểu đồ
      this.chartOptions = {
        data: [
          {
            type: 'column',
            dataPoints: revenueData,
            toolTipContent: '<b>{label}</b><br/>Doanh thu: {formattedRevenue}',
          },
        ],
        axisY: {
          labelFormatter: (e: any) => {
            // Định dạng trục y dưới dạng tiền tệ VND
            return e.value.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            });
          },
        },
      };
    });
  }

  formatChartData(revenue: any) {
    let dataPoints: any[] = [];

    // Sử dụng dữ liệu theo thời gian đã được tính toán
    const revenueByPeriod = revenue[this.selectedPeriod] || {};

    dataPoints = Object.keys(revenueByPeriod).map(key => {
      const totalRevenue = revenueByPeriod[key];

      const formattedDate = this.formatDate(key);
      // Thêm đơn vị tiền tệ vào doanh thu
      const formattedRevenue = totalRevenue.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
      return {
        label: formattedDate,
        y: totalRevenue,
        formattedRevenue: formattedRevenue, // Định dạng doanh thu với đơn vị tiền tệ
      };
    });

    return dataPoints;
  }

  formatDate(dateString: string): string {
    const parts = dateString.split('-'); // Tách ngày theo dấu '-'
    let formattedDate = '';

    if (parts.length === 3) {
      // Định dạng ngày dd/mm/yyyy
      formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    } else if (parts.length === 2) {
      // Nếu chỉ có tháng và năm (yyyy-mm), giả sử ngày là 01
      formattedDate = `01/${parts[1]}/${parts[0]}`;
    }

    return formattedDate;
  }

  onPeriodChange(period: 'day' | 'week' | 'month'): void {
    this.selectedPeriod = period;
    this.fetchRevenueData();
  }
}
