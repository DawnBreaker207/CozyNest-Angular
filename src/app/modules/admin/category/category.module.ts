import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategoryComponent } from './category-add/add.component';
import { EditCategoryComponent } from './category-edit/edit.component';
import { ListCategoryComponent } from './category-list/list.component';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ListCategoryComponent, RouterModule],
})
export class CategoryModule {}
