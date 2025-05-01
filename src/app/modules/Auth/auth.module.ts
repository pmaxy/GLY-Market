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
import { GsapScrollDirective } from '../../gsap-scroll.directive';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    OtpComponent,
    PasswordResetComponent,
    RegisterComponent,
    GsapScrollDirective,
    SpinnerComponent


    
  
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
    NgxSpinnerModule,
  

  ],
  exports: [
 SpinnerComponent
  ],
  providers: [provideHttpClient()],
})
export class AuthModule { }

