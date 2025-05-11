import { Component } from '@angular/core';
import { faGift, faHardHat, faMapMarkerAlt, faCube,
  faPencilRuler,
  faFileAlt,
  faThLarge,
  faProjectDiagram,
  faCity,
  faMapMarkedAlt,
  faUsers,
  faSubway,
  faMicrochip,
  faMap,
  faDatabase,
  faSatellite,
  faGlobe,
  faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  searchTerm = '';

  // Icons for each category
  consultancyIcon = faGift;
  droneIcon = faMapMarkerAlt;
  plannerIcon = faUsers;
  constructionIcon = faHardHat;
  faCube = faCube;
  faPencilRuler = faPencilRuler;
  faFileAlt = faFileAlt;
  faThLarge = faThLarge;
  faProjectDiagram = faProjectDiagram;
  faCity = faCity;
  faMapMarkedAlt = faMapMarkedAlt;
  faUsers = faUsers;
  faSubway = faSubway;
  faMicrochip = faMicrochip;
  faMap = faMap;
  faDatabase = faDatabase;
  faSatellite = faSatellite;
  faGlobe = faGlobe;
  faChalkboardTeacher = faChalkboardTeacher;

  // Services offered by Consultancy
  consultancyServices = [
    {
      title: 'Urban Design Consultation',
      description: 'Consult with experts to develop sustainable urban designs, zoning strategies, and layouts.',
      icon: faGift,
      type: 'gis-tool'
    },
    {
      title: 'Building Code and Compliance',
      description: 'Receive advice on building regulations, permits, and construction compliance.',
      icon: faGift,
      type: 'gis-tool'
    }
  ];

  // Services related to Planners (Urban Planning, Design, etc.)
  plannerServices = [
    {
      title: 'Urban Master Planning',
      description: 'Create large-scale urban layouts considering the city’s mobility, zoning, and growth.',
      icon: faCity,
      type: 'urban-master-planning'
    },
    {
      title: 'Zoning & Land Use Planning',
      description: 'Provide zoning analysis, land use reports, and help secure permits for development.',
      icon: faMapMarkedAlt,
      type: 'zoning-land-use'
    },
    {
      title: 'Community Engagement Planning',
      description: 'Design workshops, surveys, and interactive sessions to include public opinion in urban development.',
      icon: faUsers,
      type: 'community-engagement'
    }
  ];

  // Drone Services for Mapping, Surveys, etc.
  droneServices = [
    {
      title: 'Aerial Mapping & Surveying',
      description: 'Use drone technology to gather precise mapping data, conduct surveys, and create topographic maps.',
      icon: faMap,
      type: 'aerial-mapping'
    },
    {
      title: 'Inspection & Monitoring',
      description: 'Drones for inspecting infrastructure, monitoring construction, and conducting safety checks.',
      icon: faSatellite,
      type: 'inspection-monitoring'
    },
    {
      title: 'Remote Sensing & Imaging',
      description: 'Collect imagery and sensor data for agricultural, environmental, and construction applications.',
      icon: faMicrochip,
      type: 'remote-sensing'
    }
  ];

  
  
  

  // Combine all services into one array for easier filtering
  allServices = [...this.consultancyServices, ...this.plannerServices, ...this.droneServices];

  // Filter services based on search term
  filteredServices() {
    const term = this.searchTerm.toLowerCase();
    return this.allServices.filter(service =>
      service.title.toLowerCase().includes(term) ||
      service.description.toLowerCase().includes(term)
    );
  }
}
