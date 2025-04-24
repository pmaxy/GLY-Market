import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationItems = [
    {
      title: 'Beginner Courses',
      description: 'Intro to Geospatial Intelligence and Drone Technology.',
      link: '/courses/beginner',
      imageUrl: '/assets/figma-photos/earthi.png'
    },
    {
      title: 'Intermediate Courses',
      description: 'Advanced mapping, drone use, and data analysis.',
      link: '/courses/intermediate',
      imageUrl: '/assets/figma-photos/earthi.png'
    },
    {
      title: 'Advanced Courses',
      description: 'Master geospatial analysis for consultancy roles.',
      link: '/courses/advanced',
      imageUrl: '/assets/figma-photos/earthi1.png'
    },
    {
      title: 'Drone Simulation Tool',
      description: 'Simulate aerial surveys & understand data flow.',
      link: '#',
      imageUrl: '/assets/figma-photos/earthi2.png'
    },
    {
      title: 'Map Customization Tool',
      description: 'Create maps with sample data in real scenarios.',
      link: '#',
      imageUrl: '/assets/figma-photos/drone.jpg'
    },
    {
      title: 'Eco-friendly Practices',
      description: 'Learn sustainable practices & reduce impact.',
      link: '#',
      imageUrl: '/assets/figma-photos/forest2.png'
    },
    {
      title: 'Conservation Initiatives',
      description: 'Join reforestation & conservation programs.',
      link: '#',
      imageUrl: '/assets/figma-photos/globe-hands.png'
    }
  ];
}
