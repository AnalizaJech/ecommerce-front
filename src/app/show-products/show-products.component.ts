import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-products',
  standalone: true,
  imports: [NgIf],
  templateUrl: './show-products.component.html',
})
export class ShowProductsComponent {
  userRole: string | null = '';
  showModal: boolean = false;

  ngOnInit() {
    this.userRole = localStorage.getItem('userrole');
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
