import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: 'admin' | 'gerente' | 'user' | null = null; // Armazena o usuário logado
  private roles: { [key: string]: string } = {
    'admin': 'Adm',
    'gerente': 'Gerente',
    'user': 'Usuario'
  };

  login(username: string, password: string): boolean {
    // Simulação de login - substitua com autenticação real
    if (username === 'admin' && password === 'admin') {
      this.currentUser = 'admin';
      return true;
    } else if (username === 'gerente' && password === 'gerente') {
      this.currentUser = 'gerente';
      return true;
    } else if (username === 'user' && password === 'user') {
      this.currentUser = 'user';
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
  }

  getUserRole(): string | null {
    if (this.currentUser) {
      return this.roles[this.currentUser];
    }
    return null;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}
