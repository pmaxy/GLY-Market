import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendarCheck, faCogs, faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../../../theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
    @Output() logout = new EventEmitter<void>();
    @Output() closeSidebar = new EventEmitter<void>();
    // theme: string = ''; // '' or 'dark'
  faCalendarCheck = faCalendarCheck;
  faCogs = faCogs;
  faUserCircle = faUserCircle;
  faRightFromBracket = faRightFromBracket;

  constructor(
    private router:Router,
    public themeService: ThemeService
  ){

  }
    

  onNavigate() {
    if (window.innerWidth <= 768) {
      this.closeSidebar.emit();
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }


}
