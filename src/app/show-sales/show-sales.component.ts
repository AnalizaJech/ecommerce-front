import { Component } from '@angular/core';

@Component({
  selector: 'app-show-sales',
  standalone: true,
  imports: [],
  templateUrl: './show-sales.component.html',
})
export class ShowSalesComponent {
  sales = [
    { cliente: 'Giacomo Perez', producto: 'Laptop', categoria: 'Electrónicos', monto: 4000, fecha: '10/03/2025' },
    { cliente: 'Maria Tello', producto: 'Laptop', categoria: 'Electrónicos', monto: 4000, fecha: '10/03/2025' },
    { cliente: 'Juan Robles', producto: 'Pan', categoria: 'Electrónicos', monto: 4000, fecha: '10/03/2025' },
    { cliente: 'Giacomo Perez', producto: 'Mouse', categoria: 'Electrónicos', monto: 4000, fecha: '10/03/2025' },
    { cliente: 'Diego', producto: 'Laptop', categoria: 'Electrónicos', monto: 3000, fecha: '24/03/2025' },
    { cliente: 'Elena Duran', producto: 'Llantas', categoria: 'Electrónicos', monto: 4000, fecha: '10/03/2025' },
  ];
}
