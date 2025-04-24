import { Component } from '@angular/core';
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events: Event[] = [
    {
      id: 1,
      title: 'Geospatial Intelligence Workshop',
      description: 'Learn the fundamentals of geospatial data and mapping techniques to boost your career in GIS.',
      date: 'May 12, 2025',
      image: '/assets/figma-photos/earthi1.png',
      link: '/event-details/1'
    },
    {
      id: 2,
      title: 'Drone Technology for Agriculture',
      description: 'Discover how drone technology is transforming the agricultural industry by optimizing crop monitoring and land management.',
      date: 'May 20, 2025',
      image: '/assets/figma-photos/earthi.png',
      link: '/event-details/2'
    },
    {
      id: 3,
      title: 'Sustainable Urban Planning Conference',
      description: 'Join experts in urban planning and environmental sustainability as they discuss strategies for building smarter cities.',
      date: 'June 5, 2025',
      image: '/assets/figma-photos/earthi2.png',
      link: '/event-details/3'
    }
  ];
}