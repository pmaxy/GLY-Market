import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isSidebarVisible = false;  // Initially hidden
  isDesktop = window.innerWidth > 768;

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

  
}
