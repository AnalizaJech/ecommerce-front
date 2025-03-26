import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (res) => {
        const token = res.token;
        const role = res.user.role;

        this.authService.setSession(token, role);

        if (role === 'admin') {
          this.router.navigate(['/sales']);
        } else if (role === 'cliente') {
          this.router.navigate(['/products']);
        } else {
          this.errorMessage = 'Rol no válido';
        }
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
      },
    });
  }
}
