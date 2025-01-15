import { AfterViewInit, Component, Input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../../../../../shared/types/order';
import { CurrencyPipe, NgForOf } from '@angular/common';
type TopProduct = {
  SKU: string;
  quantity: number;
  name: string;
  price: number;
  image: string[];
};
@Component({
  selector: 'app-top-product',
  standalone: true,
  imports: [NzTableModule, CurrencyPipe, NgForOf],
  templateUrl: './top-product.component.html',
  styleUrl: './top-product.component.scss',
})
export class TopProductComponent implements AfterViewInit {
  @Input() topProducts$!: BehaviorSubject<Order[]>;
  topProducts: TopProduct[] = [];
  columns = [
    { title: 'SKU' },
    {
      title: 'Hỉnh ảnh',
    },
    { title: 'Tên sản phẩm' },
    { title: 'Giá sản phẩm' },
    { title: 'Số lượt bán' },
  ];

  ngAfterViewInit(): void {
    const completedOrders = this.topProducts$
      .getValue()
      .filter(order => order.status === 'Completed');

    const productSales: Record<
      string,
      {
        SKU: string;
        quantity: number;
        name: string;
        image: string[];
        price: number;
      }
    > = {};

    completedOrders.forEach((order: Order) => {
      order.order_details.forEach(product => {
        product.products.forEach(item => {
          const skuId = item.sku_id;
          if (skuId && skuId._id) {
            if (productSales[skuId._id]) {
              productSales[skuId._id].quantity += item.quantity;
            } else {
              productSales[skuId._id] = {
                SKU: skuId.SKU,
                quantity: item.quantity,
                name: skuId.name,
                price: item.price,
                image: skuId.image || [],
              };
            }
          }
        });
      });
    });

    this.topProducts = Object.entries(productSales)
      .map(([sku_id, data]) => ({ sku_id, ...data }))
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5);
  }
}
