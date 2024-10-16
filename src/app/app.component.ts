import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa o Router para navegação
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button'; // Importação do ButtonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ButtonModule], // Importa os módulos necessários
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

   navigateTo(page: string): void {
    // Navegação simples entre as rotas
    this.router.navigate([`/${page}`]);
  }

  login(){
    console.log("Login")
    this.router.navigate(['/login']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  profile(){
    
    this.router.navigate(['/profile']);
  }

  adm(){
    this.router.navigate(['/adm']);
  }

  gerente(){

    this.router.navigate(['/gerente']);
  }

}
 