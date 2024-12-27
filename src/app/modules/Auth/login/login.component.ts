import { Component, NgZone } from '@angular/core';
import { AuthenticationRequest } from '../../../services/models';
import { AuthenticationService } from '../../../services/services';
import { Router } from '@angular/router';
import { TokenService } from '../../../token/token.service';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandlerService } from '../../../services/error-handler.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];
  isLoading: boolean = false;
  progressWidth: string = '0%';
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private toast: ToastrService,
    private errorHandler: ErrorHandlerService,
    private spinner: NgxSpinnerService,
    private ngZone: NgZone
  
  ){}

  login(){
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res)=> {
        this.tokenService.token = res.access_token as string
        this.isLoading = true;
        this.ngZone.run(() => {
          this.spinner.show();
          setTimeout(() => {
            this.router.navigate(['userAdmin/user'])
            this.spinner.hide();
            this.isLoading = false;
            this.toast.success("Successful login",'Success')

    }, 2000);
  });
      },
      error: (err) => {
        this.errorHandler.handleErrorResponse(err);
      }
    }

    )
  }

  register() {
  this.isLoading = true;
  this.ngZone.run(() => {
    this.spinner.show();
    setTimeout(() => {
      this.router.navigate(['register']);
      this.spinner.hide();
      this.isLoading = false; // Hide overlay and spinner
    }, 2000);
  });

    
  }

}

