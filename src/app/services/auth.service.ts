import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://67b457e6392f4aa94faa6fa1.mockapi.io/api/jech/estudiantes/Producto'; // <-- cambia esta URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  setSession(token: string, role: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userrole', role);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userrole');
  }

  getRole(): string | null {
    return localStorage.getItem('userrole');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
