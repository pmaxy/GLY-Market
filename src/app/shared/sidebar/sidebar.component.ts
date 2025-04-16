// sidebar.component.ts
import { Component, Input, OnChanges } from '@angular/core';
import { faBriefcase, faCalendarCheck, faCalendarDays, faCog, faCogs, faComments, faGraduationCap, faNewspaper, faRightFromBracket, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnChanges {
  @Input() module: string = 'default'; // module name from parent component (like Admin, User)
  userType: 'user' | 'drone' | 'pilot' = 'user';  // Set dynamically based on the logged-in user
  userName = 'User';  // Set dynamically based on the logged-in user
  sidebarTitle = 'Angaza+';  // Title changes based on user type

  // Icons for Font Awesome
  faComments = faComments;
  faBriefcase = faBriefcase;
  faCalendarDays = faCalendarDays;
  faNewspaper = faNewspaper;
  faGraduationCap = faGraduationCap;
  faUser = faUser;
  faCogs = faCogs;
  faCalendarCheck = faCalendarCheck;
  faRightFromBracket = faRightFromBracket;
  faCog = faCog;
  faUserCircle = faUserCircle;
  navItems: any[] = [];

  ngOnChanges() {
    this.loadNavItems();
  }

  loadNavItems() {
    const commonItems = [
      { label: 'Chat', icon: 'faComments', link: 'home' },
    ];

    const adminItems = [
      { label: 'User Management', icon: 'faUsers', link: 'users' },
      { label: 'System Settings', icon: 'faSliders', link: 'settings' },
    ];

    const userItems = [
      { label: 'Opportunities', icon: 'faBriefcase', link: 'opportunity' },
      { label: 'Events', icon: 'faCalendarDays', link: 'event' },
    ];

    const dronesItems = [
      { label: 'Live Feed', icon: 'faVideo', link: 'live' },
      { label: 'Flight Logs', icon: 'faPlaneDeparture', link: 'logs' },
    ];

    switch (this.module) {
      case 'admin':
        this.navItems = [...commonItems, ...adminItems];
        break;
      case 'user':
        this.navItems = [...commonItems, ...userItems];
        break;
      case 'drones':
        this.navItems = [...commonItems, ...dronesItems];
        break;
      default:
        this.navItems = [...commonItems];
        break;
    }
  }
  logout(){

  }
}
