import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { IntroductionComponent } from './modules/client/introduction/introduction.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'admin', pathMatch: 'full', redirectTo: '/dashboard' },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/admin/product/product.module').then(
            m => m.ProductModule
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./modules/admin/category/category.module').then(
            m => m.CategoryModule
          ),
      },
    ],
  },
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'introduction',
        component: IntroductionComponent,
      },
    ],
  },
];
