import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AddVariantComponent } from './add/add.component';
import { ListVariantComponent } from './list/list.component';
import { OptionPropertiesComponent } from './option-properties/option-properties.component';
import { OptionValueComponent } from './option-value/option-value.component';
import { EditVariantComponent } from './edit/edit.component';

const route: Routes = [
  { path: '', component: ListVariantComponent },
  { path: 'add', component: AddVariantComponent },
  { path: 'edit/:id', component: EditVariantComponent },
];
@NgModule({
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
    OptionPropertiesComponent,
    OptionValueComponent,
    AddVariantComponent,
    ListVariantComponent,
    EditVariantComponent,
  ],
})
export class VariantModule {}
