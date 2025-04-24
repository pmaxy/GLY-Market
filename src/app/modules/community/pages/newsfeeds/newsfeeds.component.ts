import { Component } from '@angular/core';

@Component({
  selector: 'app-newsfeeds',
  templateUrl: './newsfeeds.component.html',
  styleUrl: './newsfeeds.component.css'
})
export class NewsfeedsComponent {
  newsList = [
    {
      title: 'Drone Tech Helping Farmers Adapt to Climate Change',
      date: 'April 22, 2025',
      summary: 'Cutting-edge drones are revolutionizing how farmers monitor crops and respond to climate threats.',
      imageUrl: '/assets/figma-photos/drone.jpg'
    },
    {
      title: 'Geospatial Platform Launches in Nairobi',
      date: 'April 20, 2025',
      summary: 'A platform offering real-time environmental data now helps urban planning and disaster mitigation.',
      imageUrl: '/assets/figma-photos/earthi1.png'
    },
    {
      title: 'New Mapping Tools Aid in Disaster Response',
      date: 'April 18, 2025',
      summary: 'Interactive geospatial tools are now deployed in flood-prone areas to improve early warning systems.',
      imageUrl: '/assets/figma-photos/globe-hands.png'
    },
    {
      title: 'Reforestation Initiative Backed by Drone Data',
      date: 'April 16, 2025',
      summary: 'A new project uses aerial imagery to track reforestation progress in Kenya’s degraded forest areas.',
      imageUrl: '/assets/figma-photos/earthi1.png'
    },
    {
      title: 'Youth Trained in Climate Mapping Techniques',
      date: 'April 15, 2025',
      summary: 'Workshops empower young professionals with GIS skills for local climate adaptation projects.',
      imageUrl: '/assets/figma-photos/earth.png'
    },
    {
      title: 'Nairobi Schools Adopt Eco-Smart Learning Materials',
      date: 'April 12, 2025',
      summary: 'Schools integrate sustainability into education with map-based learning and eco-print tools.',
      imageUrl: '/assets/figma-photos/earthi2.png'
    }
  ];

}
