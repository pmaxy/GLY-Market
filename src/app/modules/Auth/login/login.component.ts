import { Component, NgZone } from '@angular/core';
import { AuthenticationRequest } from '../../../services/models';
import { AuthenticationService } from '../../../services/services';
import { Router } from '@angular/router';
import { TokenService } from '../../../token/token.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ErrorHandlerService } from '../../User/error-handler.service';

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
  leafImages: string[] = [
    "/assets/figma-photos/Autumn-Fall-Leaves-Clip-Art-PNG.png",
    "/assets/figma-photos/Fall-Autumn-Leaves-Transparent-PNG.png",
    "/assets/figma-photos/Green-Leaves-PNG-File.png",
    "/assets/figma-photos/Green-Leaves-PNG-File.png",
    "/assets/figma-photos/Realistic-Autumn-Fall-Leaves-PNG.png",
    "/assets/figma-photos/Fall-Autumn-Leaves-Transparent-PNG.png",
    "/assets/figma-photos/Autumn-Fall-Leaves-Clip-Art-PNG.png",
    "/assets/figma-photos/Transparent-Autumn-Leaves-Falling-PNG.png",
    "/assets/figma-photos/Fall-Autumn-Leaves-Transparent-PNG.png",
    "/assets/figma-photos/Autumn-Fall-Leaves-Clip-Art-PNG.png",
    "/assets/figma-photos/Green-Leaves-PNG-File.png",
  ];
  
  leafPositions: string[] = [
    "85%", "30%", "15%", "90%", "5%", "10%", "25%", "35%", "45%", "55%", "60%"
  ];
  
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
            this.toast.success("Successful login",'Success', {
              toastClass: 'custom-toast'
            })

    }, 2000);
  });
      },
      error: (err) => {
        this.toast.error("error login",'Success', {
          toastClass: 'custom-toast'
        })
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

