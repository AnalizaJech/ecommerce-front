import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  userRole = localStorage.getItem('userrole');

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}
