import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdmComponent } from './pages/adm/adm.component';
import { GerenteComponent } from './pages/gerente/gerente.component';

import { AuthGuard } from './guards/auth.guard';
import { AdmAuthGuard } from './guards/adm-auth.guard';
import { GerenteAuthGuard } from './guards/gerente-auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Login como tela inicial
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'adm', component: AdmComponent, canActivate: [AdmAuthGuard] },
  { path: 'gerente', component: GerenteComponent, canActivate: [GerenteAuthGuard] }
];
