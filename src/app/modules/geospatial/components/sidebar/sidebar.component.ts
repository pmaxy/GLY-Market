import { Component, EventEmitter, Output } from '@angular/core';
import { faChartBar, faCog, faDraftingCompass, faFile, faFileAlt, faMap, faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../../../theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Output() logout = new EventEmitter<void>();
  @Output() sidebarClose = new EventEmitter<void>();
  @Output() closeSidebar = new EventEmitter<void>();
  theme: string = ''; // '' or 'dark'

  faMap = faMap;
  faCog = faCog;
  faFile = faFile;
  faChartBar = faChartBar;
  faUserCircle = faUserCircle;
  faRightFromBracket = faRightFromBracket;
  faDraftingCompass = faDraftingCompass;
  faFileAlt = faFileAlt

  navLinks = [
    { route: 'geodata', label: 'Maps & Data', icon: faMap, iconColor: 'text-blue-600' },
    { route: 'geoplanning', label: 'Planning Tools', icon: faDraftingCompass, iconColor: 'text-purple-600' },
    { route: 'geoanalytics', label: 'Analytics', icon: faChartBar, iconColor: 'text-orange-500' },
    { route: 'georeports', label: 'Reports', icon: faFileAlt, iconColor: 'text-teal-600' },
    { route: 'profile', label: 'My Profile', icon: faUserCircle, iconColor: '' },
    { route: 'setting', label: 'Settings', icon: faCog, iconColor: '' },
  ];
  
  constructor(public themeService: ThemeService) {}

  layers = {
    roads: true,
    population: false,
    terrain: false
  };

  selectedBasemap: string = 'streets';

  lat: number = -1.2921;  // Default: Nairobi
  lng: number = 36.8219;

  activateTool(tool: string): void {
    console.log(`Activating tool: ${tool}`);
    // Integrate with your map tool logic (e.g., leaflet.draw or measurement plugins)
  }

  // Simulate real-time updates from map
  updateCoordinates(lat: number, lng: number): void {
    this.lat = lat;
    this.lng = lng;
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
