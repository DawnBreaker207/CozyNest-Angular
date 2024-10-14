import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './common/services/products.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AddProductComponent } from './admin/components/products/add/add.component';
import { EditProductComponent } from './admin/components/products/edit/edit.component';
import { ListProductComponent } from './admin/components/products/list/list.component';
import { AddCategoryComponent } from './admin/components/category/add/add.component';
import { EditCategoryComponent } from './admin/components/category/edit/edit.component';
import { ListCategoryComponent } from './admin/components/category/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    AddProductComponent,
    EditProductComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [provideAnimationsAsync(), ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
