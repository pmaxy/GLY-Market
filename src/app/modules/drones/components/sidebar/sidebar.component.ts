import { Component } from '@angular/core';
import {
  faChartPie,
  faMapMarkedAlt,
  faCameraRetro,
  faUser,
  faCog,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faChartPie = faChartPie;
  faMapMarkedAlt = faMapMarkedAlt;
  faCameraRetro = faCameraRetro;
  faUser = faUser;
  faCog = faCog;
  faRightFromBracket = faRightFromBracket;

  logout() {
    console.log('🚪 Logging out...');
    // implement logout logic
  }

}
