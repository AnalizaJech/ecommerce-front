import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,RouterModule], 
  templateUrl: './app.component.html',
})
export class AppComponent {
  userRole: string | null = '';
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
      this.userRole = localStorage.getItem('userrole');
    });
  }

  get isLoginPage(): boolean {
    return this.currentRoute === '/login';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
