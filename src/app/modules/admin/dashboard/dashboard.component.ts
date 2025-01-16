import { OrdersService } from '@/app/core/services/orders.service';
import { UsersService } from '@/app/core/services/users.service';
import { Order } from '@/app/shared/types/order';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BehaviorSubject, map } from 'rxjs';
import { RecentOrderComponent } from './components/recent-order/recent-order.component';
import { RevenueComponent } from './components/revenue/revenue.component';
import { TopProductComponent } from './components/top-product/top-product.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    NzSelectModule,
    CurrencyPipe,
    AsyncPipe,
    RecentOrderComponent,
    TopProductComponent,
    RevenueComponent,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
})
export class DashboardComponent {
  orderSubject: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  selectedComponent: string = 'RecentOrder';

  ordersCompleted$ = this.orderSubject
    .asObservable()
    .pipe(
      map(
        orders =>
          orders.filter(order => order.status === 'Completed').length || 0
      )
    );
  ordersCanceled$ = this.orderSubject
    .asObservable()
    .pipe(
      map(
        orders =>
          orders.filter(order => order.status === 'Cancelled').length || 0
      )
    );
  totalRevenue$ = this.orderSubject
    .asObservable()
    .pipe(
      map(
        orders =>
          orders
            .filter(order => order.status === 'Completed')
            .reduce((sum: number, order) => sum + order.total_amount, 0) || 0
      )
    );

  memberTotal$: number = 0;

  constructor(
    private orderService: OrdersService,
    private userService: UsersService
  ) {
    this.orderService
      .getAll$()
      .subscribe(orders => this.orderSubject.next(orders));

    this.userService
      .getAll$()
      .pipe(
        map(users => users.filter(user => user.role === 'member').length || 0)
      )
      .subscribe(data => (this.memberTotal$ = data));
  }

  handleComponentChange(value: string) {
    this.selectedComponent = value;
  }
}
