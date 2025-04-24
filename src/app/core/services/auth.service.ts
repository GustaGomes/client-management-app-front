import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  login(email: string, password: string): boolean {
    const isValid = email === 'admin@email.com' && password === '123456';

    this.isAuthenticated = isValid;

    if (isValid) {
      localStorage.setItem('user', JSON.stringify({ email }));
    }

    return isValid;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
