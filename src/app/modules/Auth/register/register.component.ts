import { Component, NgZone } from '@angular/core';
import { RegistrationRequest } from '../../../services/models/registration-request';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../services/services/authentication.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isLoading: boolean = false;
  progressWidth: string = '0%';
  registerRequest: RegistrationRequest ={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: [] as Array<'USER' | 'ADMIN' | 'MANAGER'>,
  }
  errorMsg: Array<string>= [];
  roles: Array<'USER' | 'ADMIN' | 'MANAGER'> = ['USER', 'ADMIN', 'MANAGER'];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toast: ToastrService,
    private errorHandler: ErrorHandlerService,
    private spinner: NgxSpinnerService,
    private ngZone: NgZone
  ){
    
  }

  login() {
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

  register(){
    this.errorMsg= [];
    this.authService.register(
      {body: this.registerRequest}
    )
      .subscribe({
         next:() => {
           this.isLoading = true;
           this.ngZone.run(() => {
             this.spinner.show();
             setTimeout(() => {
               this.router.navigate(['otp']);
               this.spinner.hide();
               this.isLoading = false; // Hide overlay and spinner
               this.toast.success("Successful Added",'Success')
             }, 2000);
             
           });

           
         },
         error: (err) =>{
          this.errorHandler.handleErrorResponse(err);
       
         }
    })
    {
      
    }

  }
  
  updateRole(event: Event, role: 'USER' | 'ADMIN' | 'MANAGER'): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      if (!this.registerRequest.role.includes(role)) {
        this.registerRequest.role.push(role);
      }
    } else {
      this.registerRequest.role = this.registerRequest.role.filter(r => r !== role);
    }
  }

  

}
