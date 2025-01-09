import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-contact4',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './contact4.component.html',
  styleUrl: './contact4.component.scss',
})
export class Contact4Component {
  contactInfo = [
    {
      icon: 'question-circle',
      title: 'Hỗ trợ 24/7',
      description: 'Hotline hỗ trợ 1900.000.XXX',
    },
    {
      icon: 'gift',
      title: 'Giao hàng miễn phí',
      description: 'Thời gian giao hàng nhanh chóng, từ 3 - 5 ngày làm việc',
    },
    {
      icon: 'credit-card',
      title: 'Thanh toán đa dạng',
      description: 'Chấp nhận thanh toán COD, Momo, Banking',
    },
    {
      icon: 'reload',
      title: 'Đổi trả hàng dễ dàng',
      description: 'Thời gian trả hàng lên tới 30 ngày',
    },
  ];
}
