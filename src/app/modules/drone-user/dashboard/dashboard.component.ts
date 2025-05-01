import { Component, HostListener, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isSidebarVisible = false;
  isDesktop = window.innerWidth >= 768;

  @HostListener('window:resize', ['$event'])
    isLoading: boolean = false;
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private ngZone: NgZone,
  ){
  
  }
  onResize() {
    this.isDesktop = window.innerWidth >= 768;
  }
  

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  logout(){
    this.isLoading = true
    this.ngZone.run(() => {
    this.spinner.show();
    setTimeout(() => {
    this.router.navigate([''])
    localStorage.clear();
    this.spinner.hide();
    this.isLoading = false;},2000)})

  }

}
