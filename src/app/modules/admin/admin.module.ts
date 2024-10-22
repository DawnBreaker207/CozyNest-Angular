import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '@/app/icons-provider.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    DashboardModule,
    AdminRoutingModule,
    RouterModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
})
export class AdminModule {}
