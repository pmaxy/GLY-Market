import { Component } from '@angular/core';

@Component({
  selector: 'app-geoplanning',
  templateUrl: './geoplanning.component.html',
  styleUrl: './geoplanning.component.css'
})
export class GeoplanningComponent {
  startClimatePlanning(): void {
    // Logic to start climate planning, could open a modal, route to another page, etc.
    console.log('Starting Climate Impact Planning...');
  }

  startUrbanPlanning(): void {
    // Logic to start urban development planning
    console.log('Starting Urban Development Planning...');
  }
}
