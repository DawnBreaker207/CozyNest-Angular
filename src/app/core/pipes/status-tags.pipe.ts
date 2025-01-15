import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTags',
  standalone: true,
})
export class StatusTagsPipe implements PipeTransform {
  private statusColors: { [key: string]: string } = {
    Processing: 'blue',
    Pending: 'yellow',
    Confirmed: 'gold',
    'Pending-Ship': 'orange',
    Delivering: 'orange',
    Delivered: 'green',
    Cancelled: 'red',
    Completed: 'cyan',
    Returning: 'orange',
    Rejected: 'red',
    Returned: 'red',
    Refunding: 'orange',
    Refunded: 'purple',
  };

  private statuses: { value: string; label: string }[] = [
    { label: 'Đang xử lý', value: 'Processing' },
    { label: 'Chờ xác nhận', value: 'Pending' },
    { label: 'Đã xác nhận', value: 'Confirmed' },
    { label: 'Đang chờ bên vận chuyển', value: 'Pending-Ship' },
    { label: 'Đang vận chuyển', value: 'Delivering' },
    { label: 'Giao hàng thành công', value: 'Delivered' },
    { label: 'Đơn hàng hoàn thành', value: 'Completed' },
    { label: 'Tiến hành hoàn trả', value: 'Returning' },
    { label: 'Từ chối hoàn trả', value: 'Rejected' },
    { label: 'Hoàn trả đơn hàng', value: 'Returned' },
    { label: 'Tiến hành hoàn tiền', value: 'Refunding' },
    { label: 'Hoàn tiền đơn hàng', value: 'Refunded' },
    { label: 'Đã hủy đơn hàng', value: 'Cancelled' },
  ];

  transform(status: string): { statusLabel: string; color: string } {
    const statusLabel =
      this.statuses.find(s => s.value === status)?.label || status;
    const color = this.statusColors[status] || 'gray';
    return { statusLabel, color }; // Trả về label và màu sắc
  }
}
