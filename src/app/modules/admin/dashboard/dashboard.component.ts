import { OrdersService } from '@/app/core/services/orders.service';
import { UsersService } from '@/app/core/services/users.service';
import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, NzSelectModule, CurrencyPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
})
export class DashboardComponent {
  ordersComplete: number = 0;
  ordersCanceled: number = 0;
  memberTotal: number = 0;
  totalRevenue: number = 0;
  constructor(
    private orderService: OrdersService,
    private userService: UsersService
  ) {
    this.userService
      .getAll$()
      .pipe(
        map(users => users.filter(user => user.role === 'member').length || 0)
      )
      .subscribe(data => (this.memberTotal = data));
    this.orderService.getAll$
      .pipe(
        map(
          orders =>
            orders.filter(order => order.status === 'Completed').length || 0
        )
      )
      .subscribe(data => (this.ordersComplete = data));
    this.orderService.getAll$
      .pipe(
        map(
          orders =>
            orders.filter(order => order.status === 'Cancelled').length || 0
        )
      )
      .subscribe(data => (this.ordersCanceled = data));
    this.orderService.getAll$
      .pipe(
        map(
          orders =>
            orders
              .filter(order => order.status === 'Completed')
              .reduce((sum: number, order) => sum + order.total_amount, 0) || 0
        )
      )
      .subscribe(data => (this.totalRevenue = data));
  }
}
