import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  // standalone: true,
  // declarations: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isSidebarOpen = true;
  isMiniSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleMiniSidebar() {
    this.isMiniSidebarOpen = !this.isMiniSidebarOpen;
  }
  
  

}
