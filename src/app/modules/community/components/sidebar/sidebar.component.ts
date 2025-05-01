import { Component, EventEmitter, NgZone, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  faComments,
  faGraduationCap,
  faCalendarCheck,
  faCogs,
  faRss,
  faLightbulb,
  faUserCircle,
  faCog,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() logout = new EventEmitter<void>();
  @Output() closeSidebar = new EventEmitter<void>();

  faComments = faComments;
  faGraduationCap = faGraduationCap;
  faCalendarCheck = faCalendarCheck;
  faRss = faRss;
  faLightbulb = faLightbulb;
  faUserCircle = faUserCircle;
  faCog = faCog;
  faRightFromBracket = faRightFromBracket;
  isLoading: boolean = false;
  constructor(
    private router: Router,
  ) {

  }


  onNavigate() {
    if (window.innerWidth <= 768) {
      this.closeSidebar.emit();
    }
  }





}
