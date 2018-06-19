import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { HttpClient } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




import { HomeComponent } from './first-look/home/home.component';
import { LeaguesComponent } from './first-look/leagues/leagues.component';
import { InsiderComponent } from './first-look/insider/insider.component';
import { HowToPlayComponent } from './first-look/how-to-play/how-to-play.component';
import { ResearchVaultComponent } from './first-look/research-vault/research-vault.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

//material elements
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    StatusComponent,
    HomeComponent,
    LeaguesComponent,
    InsiderComponent,
    HowToPlayComponent,
    ResearchVaultComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

    
    HttpClientModule,
    // BrowserAnimationsModule,
    NgbModule.forRoot(),
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
    

  ],
  providers: [HttpClient, AuthService, UserService, UserResolver, AuthGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
