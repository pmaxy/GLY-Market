import { Component, HostListener, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main',
  // standalone: true,
  // declarations: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isSidebarVisible = false;
  onSidebarClose() {
    this.isSidebarOpen = false;
  }
  isDesktop = window.innerWidth > 768;
  isSidebarOpen = false;
  isMiniSidebarOpen = false;
    isLoading: boolean = false;
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private ngZone: NgZone,
  ){
  
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleMiniSidebar() {
    this.isMiniSidebarOpen = !this.isMiniSidebarOpen;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const width = (event.target as Window).innerWidth;
    const wasDesktop = this.isDesktop;
  
    this.isDesktop = width > 768;
  
    // Auto-close sidebar when switching to mobile
    if (!this.isDesktop && wasDesktop) {
      this.isSidebarOpen = false;
      this.isSidebarVisible = false;
    }
  
    // Optionally: keep sidebar open on resize back to desktop
    if (this.isDesktop && !wasDesktop) {
      this.isSidebarOpen = true;
      this.isSidebarVisible = true;
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
