import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'; 

interface Drone {
  name: string;
  type: 'geospatial' | 'ceremony' | 'site';
  description: string;
  image: string;
  specs: string[];
}

@Component({
  selector: 'app-drone-lists',
  templateUrl: './drone-lists.component.html',
  styleUrl: './drone-lists.component.css'
})
export class DroneListsComponent implements OnInit {
  selectedType: string = '';
  filteredDrones: Drone[] = [];
  allDrones: Drone[] = [
    {
      name: 'DJI Phantom 4 RTK',
      type: 'geospatial',
      description: 'High-precision drone ideal for mapping, surveying, and topography.',
      image: '/assets/figma-photos/DJI Phantom 4 RTK.jpg', // Real accessible image URL
      specs: ['RTK GNSS', '20MP Camera', '1" CMOS Sensor', '30 min Flight Time']
    },
    {
      name: 'Mavic 3 Enterprise',
      type: 'site',
      description: 'Compact and efficient for construction and infrastructure inspections.',
      image: "/assets/figma-photos/Mavic 3 Enterprise.jpg", // Real accessible image URL
      specs: ['Zoom Camera', 'Thermal Imaging', 'GPS Sync', '4K Video']
    },
    {
      name: 'DJI Air 2S',
      type: 'ceremony',
      description: 'Perfect for capturing events and celebrations in high resolution.',
      image: "/assets/figma-photos/DJI Air 2S.jpg", // Real accessible image URL
      specs: ['5.4K Video', 'HDR', '48MP Photos', 'Obstacle Avoidance']
    },
    {
      name: 'DJI Matrice 300',
      type: 'geospatial',
      description: 'Industrial-grade drone with multi-sensor payloads for advanced surveys.',
      image: "/assets/figma-photos/DJI Matrice 300.jpg", // Real accessible image URL
      specs: ['LiDAR Support', 'Thermal & RGB', '55 min Flight', 'AI Capabilities']
    }
  ];

  filterDrones() {
    this.filteredDrones = this.allDrones.filter(drone => drone.type === this.selectedType);
  }

  constructor(private route: ActivatedRoute,private location: Location,private routepath:Router) {}

  ngOnInit(): void {
    // Subscribe to route params to get the selected service type
    this.route.paramMap.subscribe(params => {
      this.selectedType = params.get('type') || 'geospatial'; // Default to 'geospatial' if no type is provided
      this.filterDrones(); // Filter drones based on the selected type
    });
  }
  goBack(): void {
    this.location.back();
  }
}
