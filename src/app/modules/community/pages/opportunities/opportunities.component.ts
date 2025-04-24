import { Component } from '@angular/core';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrl: './opportunities.component.css'
})
export class OpportunitiesComponent {
  showForm = false;

  opportunities = [
    {
      title: 'Climate Data Analyst Internship',
      type: 'Internship',
      postedOn: 'April 20, 2025',
      description: 'Work with our team on environmental data and geospatial analysis to support planning efforts.',
      location: 'Nairobi, Kenya',
      imageUrl: '/assets/figma-photos/earthi1.png'
    },
    {
      title: 'Grant: Community Tree Planting',
      type: 'Grant',
      postedOn: 'April 18, 2025',
      description: 'Apply for funding and resources to run reforestation projects in your community.',
      location: 'National',
      imageUrl: '/assets/figma-photos/earthi.png'
    },
    {
      title: 'Grant: Community Tree Planting',
      type: 'Grant',
      postedOn: 'April 18, 2025',
      description: 'Apply for funding and resources to run reforestation projects in your community.',
      location: 'National',
      imageUrl: '/assets/figma-photos/earth1.png'
    },
    {
      title: 'Grant: Community Tree Planting',
      type: 'Grant',
      postedOn: 'April 18, 2025',
      description: 'Apply for funding and resources to run reforestation projects in your community.',
      location: 'National',
      imageUrl: '/assets/figma-photos/earth.png'
    }
  ];


  openDialog() {
    // This is where you can open a dialog for form using Angular Material, etc.
  }
  newOpportunity = {
    title: '',
    type: '',
    description: '',
    location: '',
    imageUrl: ''
  };

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addOpportunity() {
    if (this.newOpportunity.title && this.newOpportunity.type) {
      this.opportunities.unshift({
        ...this.newOpportunity,
        postedOn: new Date().toDateString()
      });
      this.newOpportunity = { title: '', type: '', description: '', location: '', imageUrl: '' };
      this.showForm = false;
    }
  }
}