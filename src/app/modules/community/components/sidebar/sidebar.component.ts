import { Component } from '@angular/core';
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
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faComments = faComments;
  faGraduationCap = faGraduationCap;
  faCalendarCheck = faCalendarCheck;
  faRss = faRss;
  faLightbulb = faLightbulb;
  faUserCircle = faUserCircle;
  faCog = faCog;
  faRightFromBracket = faRightFromBracket;
  constructor(
    private router:Router
  ){

  }

  logout(){
    localStorage.clear();
    this.router.navigate([''])

  }
}
