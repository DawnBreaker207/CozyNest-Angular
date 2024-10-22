import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './product-list/list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './product-add/add.component';
import { EditProductComponent } from './product-edit/edit.component';
import { ProductsService } from '@/app/shared/common/services/products.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
  },
  {
    path: 'add',
    component: AddProductComponent,
  },
  {
    path: 'edit/:id',
    component: EditProductComponent,
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
    NzButtonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ProductsService],
  exports: [ListProductComponent, RouterModule],
})
export class ProductModule {}
