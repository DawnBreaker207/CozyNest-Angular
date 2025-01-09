import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';

import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '@/app/icons-provider.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    AdminComponent,
  ],
})
export class AdminModule {}
