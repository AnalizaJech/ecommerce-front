import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { SidebarComponent } from './shared/sidebar/sidebar.component'; // <-- este import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NgIf,
    SidebarComponent // <-- agrégalo aquí
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  userRole: string | null = '';
  currentRoute: string = '';
  sidebarOpen = true;

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
