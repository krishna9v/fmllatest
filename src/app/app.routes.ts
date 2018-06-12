import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';

import { HomeComponent } from './first-look/home/home.component';
import { LeaguesComponent } from './first-look/leagues/leagues.component';
import { InsiderComponent } from './first-look/insider/insider.component';
import { HowToPlayComponent } from './first-look/how-to-play/how-to-play.component';
import { ResearchVaultComponent } from './first-look/research-vault/research-vault.component';


export const rootRouterConfig: Routes = [
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},

   {path: 'home', component: HomeComponent},
   {path: 'leagues', component: LeaguesComponent},
   {path: 'insider', component: InsiderComponent},
   {path: 'research-vault', component: ResearchVaultComponent},
   
   

   
];
