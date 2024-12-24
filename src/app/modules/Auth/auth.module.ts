import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CodeInputModule } from 'angular-code-input';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    OtpComponent,
    PasswordResetComponent,
    RegisterComponent,
    
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    IonicModule.forRoot(),
    FormsModule,
    MaterialModule,
    RouterModule,
    ToastrModule,
    HttpClientModule,
    CodeInputModule,
    NgxSpinnerModule

  ],
  providers: [provideHttpClient()],
})
export class AuthModule { }

