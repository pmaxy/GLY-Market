import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  // standalone: true,
  // declarations: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isSidebarOpen = false; // Sidebar starts closed
  isMiniSidebarOpen= false

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggle the sidebar state
  }

  toggleMiniSidebar(){
    this.isMiniSidebarOpen = !this.isMiniSidebarOpen;

  }
  
  

}
