import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowSalesComponent } from './show-sales/show-sales.component';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'products',
    component: ShowProductsComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'cliente'] }
  },
  {
    path: 'sales',
    component: ShowSalesComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin'] }
  }
];
