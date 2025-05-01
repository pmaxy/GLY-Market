import { Component, EventEmitter, Output } from '@angular/core';
import { faChartBar, faCog, faDraftingCompass, faFile, faFileAlt, faMap, faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Output() logout = new EventEmitter<void>();
  @Output() sidebarClose = new EventEmitter<void>();
  @Output() closeSidebar = new EventEmitter<void>();

  faMap = faMap;
  faCog = faCog;
  faFile = faFile;
  faChartBar = faChartBar;
  faUserCircle = faUserCircle;
  faRightFromBracket = faRightFromBracket;
  faDraftingCompass = faDraftingCompass;
  faFileAlt = faFileAlt




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

}
