import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NgIf]
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.authService.getUserRole() === 'Adm';
  }

  isGerenteOrAdmin(): boolean {
    const role = this.authService.getUserRole();
    return role === 'Adm' || role === 'Gerente';
  }
}
