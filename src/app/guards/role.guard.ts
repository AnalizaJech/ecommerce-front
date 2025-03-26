// src/app/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles = route.data['roles'];
    const userRole = localStorage.getItem('userrole');

    if (allowedRoles.includes(userRole)) {
      return true;
    }

    // Redirige a login si no tiene acceso
    this.router.navigate(['/login']);
    return false;
  }
}
