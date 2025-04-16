import { Component } from '@angular/core';
import { faGift, faHardHat, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  searchTerm = '';

  geospatialIcon = faMapMarkerAlt;
  ceremonyIcon = faGift;
  constructionIcon = faHardHat;

  services = [
    {
      title: 'Geospatial Mapping',
      type: 'geospatial',
      description: 'Professional mapping with aerial insights.',
      icon: this.geospatialIcon,  // Use the imported icon here
    },
    {
      title: 'Ceremony Coverage',
      type: 'ceremony',
      description: 'High-res drone footage for weddings and events.',
      icon: this.ceremonyIcon,  // Use the imported icon here
    },
    {
      title: 'Construction Site Inspection',
      type: 'site',
      description: 'Real-time visuals and safety checks.',
      icon: this.constructionIcon,  // Use the imported icon here
    },
  ];
  

  filteredServices() {
    const term = this.searchTerm.toLowerCase();
    return this.services.filter(service =>
      service.title.toLowerCase().includes(term) ||
      service.description.toLowerCase().includes(term)
    );
  }
}
