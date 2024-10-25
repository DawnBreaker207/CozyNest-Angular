import { CategoryService } from '@/app/shared/common/services/category.service';
import { NotificationsService } from '@/app/shared/common/services/notifications.service';
import { ProductsService } from '@/app/shared/common/services/products.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AddProductComponent } from './add/add.component';
import { EditProductComponent } from './edit/edit.component';
import { ListProductComponent } from './list/list.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit/:id',
    component: EditProductComponent,
    pathMatch: 'prefix',
  },
];

@NgModule({
  declarations: [
    ListProductComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzPopconfirmModule,
    NzSelectModule,
    NzButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzDropDownModule,
    NzInputModule,
    NzDividerModule,
    RouterModule.forChild(routes),
  ],
  providers: [ProductsService, CategoryService, NotificationsService],
})
export class ProductModule {}
