import { Component, CUSTOM_ELEMENTS_SCHEMA, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../../../services/services';
import { TokenService } from '../../../token/token.service';
import { AuthenticationRequest } from '../../../services/models';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent{

  isLoading: boolean = false;
  progressWidth: string = '0%';
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private ngZone: NgZone,
    private authService: AuthenticationService,
    private tokenService: TokenService,
  ){}


  items = [
    { src: '', color: '#d73a6d' },
    { src: '/assets/figma-photos/278414581-274f29ce-0d3f-4ac2-a2aa-f9b7bd188b2a.jpg' },
    { src: '', color: '#6cc164' },
    { src: '/assets/figma-photos/278414662-b8a14493-3d9f-4b9b-b93a-56d0bc7243e9.jpg' },
    { src: '/assets/figma-photos/278414540-86c71a79-2efe-4567-8665-b1e5a1fd9735.jpg' },
    { src: '',color: '#fef2f5' },
    { src: '/assets/figma-photos/278414689-03e51e1e-9750-45a5-b75e-a1e341d4562a.jpg' },
    { src: '',color: '#f9acbd' },
    { src: '', color: '#921e43' },
     { src: '/assets/figma-photos/278414484-97ef9643-5202-41aa-80f0-ceeabccdd099.jpg' },
    { src: '', color: '#fcd659' },
    { src: '/assets/figma-photos/278414689-03e51e1e-9750-45a5-b75e-a1e341d4562a.jpg' },
];

login(){
    this.isLoading = true;
    this.ngZone.run(() => {
      this.spinner.show();
      setTimeout(() => {
        if(this.tokenService.isTokenValid()){
          this.router.navigate(['userAdmin/user'])

        }else{
          this.router.navigate(['login'])   
        }

        this.spinner.hide();
        this.isLoading = false;
    }, 2000);
   });


}



register(){
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