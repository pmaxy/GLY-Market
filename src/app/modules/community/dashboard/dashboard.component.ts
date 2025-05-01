import { Component, HostListener, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isSidebarVisible = false;  // Initially hidden
  isDesktop = window.innerWidth > 768;
  isLoading: boolean = false;
constructor(
  private router: Router,
  private spinner: NgxSpinnerService,
  private ngZone: NgZone,
){

}
  // Toggle sidebar visibility
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth > 768;
    if (this.isDesktop) {
      // Optionally hide the sidebar on desktop resize if needed
      this.isSidebarVisible = false;
    }
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
