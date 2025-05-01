import { Component, HostListener, NgZone } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isSidebarVisible = false;
  isDesktop = window.innerWidth >= 768;
  showSidebar = true;
  @HostListener('window:resize', ['$event'])
    isLoading: boolean = false;
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private ngZone: NgZone,
  ){
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        if (!this.isDesktop) {
          this.showSidebar = false;
          this.isSidebarVisible = false;
        }
      });
      
    }
    onSidebarClose(): void {
      this.showSidebar = false;
      this.isSidebarVisible = false; // Also hide the animated sidebar
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


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth > 768;
    if (this.isDesktop) {
      // Optionally hide the sidebar on desktop resize if needed
      this.isSidebarVisible = false;
    }
  }

}
