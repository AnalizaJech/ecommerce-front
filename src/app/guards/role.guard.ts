import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles = route.data['roles'] as string[];
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userrole');

    if (token && userRole && allowedRoles.includes(userRole)) {
      return true;
    }

    // Redirige a login si no tiene token o rol permitido
    this.router.navigate(['/login']);
    return false;
  }
}
