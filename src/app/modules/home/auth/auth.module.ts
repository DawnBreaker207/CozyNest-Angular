import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LoginComponent],
  imports: [CommonModule],
})
export class AuthModule {}
