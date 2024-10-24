import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategoryComponent } from './category-add/add.component';
import { EditCategoryComponent } from './category-edit/edit.component';
import { ListCategoryComponent } from './category-list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';

const routes: Routes = [
  {
    path: '',
    component: ListCategoryComponent,
  },
  {
    path: 'add',
    component: AddCategoryComponent,
  },
  {
    path: 'edit/:id',
    component: EditCategoryComponent,
  },
];
@NgModule({
  declarations: [
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
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
  exports: [],
})
export class CategoryModule {}
