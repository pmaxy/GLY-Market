import { Component } from '@angular/core';

@Component({
  selector: 'app-georeports',
  templateUrl: './georeports.component.html',
  styleUrl: './georeports.component.css'
})
export class GeoreportsComponent {
  reports = [
    { id: 1, title: 'Climate Change Impact Report', description: 'Analysis of climate change impacts over the last decade.' },
    { id: 2, title: 'Land Use and Development Report', description: 'Detailed report on urban land use trends and future predictions.' },
    { id: 3, title: 'Disaster Preparedness and Risk Zones', description: 'A comprehensive report on disaster risk zones and preparedness strategies.' },
  ];

  constructor() {}

  ngOnInit(): void {
    // Fetch reports from an API if needed
  }

  downloadReport(reportId: number): void {
    // Logic to download report, this could be an API call or local file download
    console.log(`Downloading report with ID: ${reportId}`);
  }
}