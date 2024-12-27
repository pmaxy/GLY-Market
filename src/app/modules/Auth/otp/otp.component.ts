import { Component, NgZone } from '@angular/core';
import { skipUntil } from 'rxjs';
import { AuthenticationService } from '../../../services/services';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../../services/error-handler.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  message= "";
  isOkay = true;
  submitted= false;
  isLoading: boolean = false;
  progressWidth: string = '0%';

  constructor(
    private router: Router,
    private authServive: AuthenticationService,
    private errorHandler: ErrorHandlerService,
    private spinner: NgxSpinnerService,
    private ngZone: NgZone,
    private toast: ToastrService
      
    
  ){}

  private confirmAccount(token: string){
    this.authServive.confirm({
    token
    
    }).subscribe({
      next: () =>{
        this.message = 'Your account has been successfully activated.\nNow you can proceed to login';
        this.submitted = true;
        this.isLoading = true;
        this.ngZone.run(() => {
         this.spinner.show();
         setTimeout(() => {
          this.router.navigate(['login']);
          this.spinner.hide();
          this.isLoading = false; // Hide overlay and spinner
          this.toast.success('Account activated successfully', 'success')
    }, 2000);
  });

      },
      error: (err) =>{
        this.errorHandler.handleErrorResponse(err);

      }
    })
  }

  redirectToLogin() {
  this.isLoading = true;
  this.ngZone.run(() => {
    this.spinner.show();
    setTimeout(() => {
      this.router.navigate(['login']);
      this.spinner.hide();
      this.isLoading = false; // Hide overlay and spinner
    }, 2000);
  });
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  protected readonly skipUntil = skipUntil;
}