import { Component, CUSTOM_ELEMENTS_SCHEMA, NgZone,ElementRef,  ViewChild, AfterViewInit, OnInit, } from '@angular/core';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../../../services/services';
import { TokenService } from '../../../token/token.service';
import { AuthenticationRequest } from '../../../services/models';
import { Dropdown, DropdownInterface, DropdownOptions, InstanceOptions } from 'flowbite';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit, AfterViewInit{

  @ViewChild('dropdownMenu') dropdownMenuRef!: ElementRef;
  @ViewChild('dropdownBtn') dropdownBtnRef!: ElementRef;
  @ViewChild('myDropdown') myDropdown?: ElementRef;
  isMenuOpen = false;
  openDropdownIndex: number | null = null;
  fullText = 'Shop with AAI+  Your One-Stop Hub for Smart Tools & Solutions';
  displayedText = ''; 
  typingSpeed = 100;
  isLoading: boolean = false;
  progressWidth: string = '0%';
currentYear: any;
i: any;
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


menuItems = [
  {
    label: 'Community',
    links: [
      { text: 'Chats', href: '/chatroom' },
      { text: 'Events', href: '/chatroom/events' },
      { text: 'Opportunities', href: '/chatroom/opportunity' },
      { text: 'Education', href: '/chatroom/education' },
      { text: 'News', href: '/chatroom/newsfeed' }
    ]
  },

  {
    label: 'Drone Service',
    links: [
      { text: 'Booking', href: '/dronesuser/book' },
      { text: 'Services', href: '/dronesuser/service' },

    ]
  },
  {
    label: 'EarthPortal',
    links: [
      { text: 'Geodata', href: '/geoportal' },
      { text: 'GeoAnalytics', href: '/geoportal/geoanalytics' },
      { text: 'GeoPlanning', href: '/geoportal/geoplanning' },
      { text: 'GeoReports', href: '/geoportal/georeports' }
    ]
  },
  {
    label: 'Market Place',
    links: [
      { text: 'Buy Inputs', href: '/userAdmin' },
      { text: 'Sell Produce', href: '/userAdmin' },
    ]
  }
];



ngOnInit(): void {
  this.startTypingEffect();
  this.clickRoute()
}
clickRoute(){

}



ngAfterViewInit() {
  const dropdownPairs = [
    ['dropdownDelay', 'dropdownDelayButton'],
    ['dropdownDelay2', 'dropdownDelayButton2'],
    ['dropdownDelay3', 'dropdownDelayButton3'],
    ['dropdownDelay4', 'dropdownDelayButton4'],
  ];

  dropdownPairs.forEach(([menuId, buttonId]) => {
    const menuEl = document.getElementById(menuId);
    const buttonEl = document.getElementById(buttonId);

    if (menuEl && buttonEl) {
      new Dropdown(menuEl, buttonEl, {
        triggerType: 'hover',
        delay: 500,
      });
    }
  });

}
droneservice(){

}
startTypingEffect(){
  let index = 0;

  const typingInterval = setInterval(()=>{
    if(index< this.fullText.length){
      this.displayedText+= this.fullText.charAt(index);
      index++;
    } else{
      clearInterval(typingInterval);
    }
  }, this.typingSpeed
);
}
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

marketclick() {
  
  this.isLoading = true;
  this.ngZone.run(() => {
    this.spinner.show();
  setTimeout(() => {
  this.router.navigate(['/userAdmin'])
  this.spinner.hide();
  this.isLoading = false;},2000)})
}
  droneclick() {
    this.isLoading = true;
    this.ngZone.run(() => {
      this.spinner.show();
    setTimeout(() => {
    this.router.navigate(['/dronesuser'])
    this.spinner.hide();
    this.isLoading = false;},2000)})
  }
  geoclick() {
 
    this.isLoading = true;
    this.ngZone.run(() => {
      this.spinner.show();
    setTimeout(() => {
    this.router.navigate(['/geoportal'])
    this.spinner.hide();
    this.isLoading = false;},2000)})
  }
  
  onGetInvolvedClick() {
    
    this.isLoading = true;
    this.ngZone.run(() => {
      this.spinner.show();
    setTimeout(() => {
    this.router.navigate(['/chatroom'])
    this.spinner.hide();
    this.isLoading = false;},2000)})
    
  }

  currentRoute: string | null = null;

  navigateWithSpinner(route: string) {
    this.isLoading = true;
    this.currentRoute = route;
  
    this.ngZone.run(() => {
      this.spinner.show();
      setTimeout(() => {
        this.router.navigate([route]).finally(() => {
          this.spinner.hide();
          this.isLoading = false;
          this.currentRoute = null;
        });
      }, 500); // Delay for UX smoothness
    });
  }
  

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  this.openDropdownIndex = null;
}


toggleDropdown(index: number) {
  this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
}

}