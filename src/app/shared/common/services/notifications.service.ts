import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private notification: NzNotificationService) {}
  createNotification(type: string, title: string, description: string): void {
    this.notification.create(type, title, description);
  }
}
