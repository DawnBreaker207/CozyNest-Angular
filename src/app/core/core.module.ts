import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { CookiesService } from './services/cookies.service';
import { NotificationsService } from './services/notifications.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AuthService,
    CategoryService,
    CookiesService,
    NotificationsService,
  ],
  exports: [],
})
export class CoreModule {}
