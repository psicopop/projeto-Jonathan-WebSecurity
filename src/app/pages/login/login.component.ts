import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Adicione o FormsModule se não estiver

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule] // Certifique-se de importar o FormsModule
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      // Se o login for bem-sucedido, o redirecionamento já ocorre no AuthService
    } else {
      alert('Credenciais inválidas');
    }
}
}
