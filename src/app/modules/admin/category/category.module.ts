import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AddCategoryComponent } from './add/add.component';
import { EditCategoryComponent } from './edit/edit.component';
import { ListCategoryComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListCategoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddCategoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit/:id',
    component: EditCategoryComponent,
    pathMatch: 'prefix',
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
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
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
  ],
  exports: [],
})
export class CategoryModule {}
