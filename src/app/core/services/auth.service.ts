import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string): boolean {
    // Mock simples de autenticação
    return email === 'admin@email.com' && password === '123456';
  }
}
