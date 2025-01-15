import { StatusTagsPipe } from '@/app/core/pipes/status-tags.pipe';
import { Order } from '@/app/shared/types/order';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recent-order',
  standalone: true,
  imports: [NzTableModule, NzTagModule, CommonModule, StatusTagsPipe],
  templateUrl: './recent-order.component.html',
  styleUrl: './recent-order.component.scss',
})
export class RecentOrderComponent implements AfterViewInit {
  @Input() latestOrders$!: BehaviorSubject<Order[]>;
  orders: Order[] = [];
  columns = [
    { title: 'Mã đơn hàng' },
    { title: 'Thời gian đặt hàng' },
    { title: 'Người đặt hàng' },
    { title: 'Trạng thái' },
  ];

  ngAfterViewInit(): void {
    this.orders = this.latestOrders$
      .getValue()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 5);
  }
}
