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
    FormsModule
  ]
})
export class AuthModule { }

