// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowSalesComponent } from './show-sales/show-sales.component';
import { RoleGuard } from './guards/role.guard'; // si ya lo creaste


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

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
  },
  { path: '**', redirectTo: 'login' }
];
