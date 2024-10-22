import { ProductsService } from '@/app/shared/common/services/products.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AddProductComponent } from './product-add/add.component';
import { EditProductComponent } from './product-edit/edit.component';
import { ListProductComponent } from './product-list/list.component';
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
