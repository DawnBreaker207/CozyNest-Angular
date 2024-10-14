import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './common/services/products.service';
import { AddProductComponent } from './admin/components/products/add/add.component';
import { EditProductComponent } from './admin/components/products/edit/edit.component';
import { ListProductComponent } from './admin/components/products/list/list.component';
import { AddCategoryComponent } from './admin/components/category/add/add.component';
import { EditCategoryComponent } from './admin/components/category/edit/edit.component';
import { ListCategoryComponent } from './admin/components/category/list/list.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
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
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  providers: [
    provideAnimationsAsync(),
    ProductsService,
    { provide: NZ_I18N, useValue: en_US },
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
