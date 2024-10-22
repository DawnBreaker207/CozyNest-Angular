import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantComponent } from './variant.component';
import { OptionPropertiesComponent } from './option-properties/option-properties.component';
import { OptionValueComponent } from './option-value/option-value.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [{ path: '', component: VariantComponent }];
@NgModule({
  declarations: [
    VariantComponent,
    OptionPropertiesComponent,
    OptionValueComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,

    NzGridModule,
    RouterModule.forChild(route),
  ],
  exports: [RouterModule],
})
export class VariantModule {}
