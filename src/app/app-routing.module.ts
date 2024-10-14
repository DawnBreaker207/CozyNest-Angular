import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './admin/components/products/list/list.component';
import { ListCategoryComponent } from './admin/components/category/list/list.component';

const routes: Routes = [
  { path: 'product', component: ListProductComponent },
  { path: 'category', component: ListCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
