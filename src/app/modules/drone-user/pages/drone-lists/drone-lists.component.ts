import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'; 

interface Drone {
  name: string;
  type:
  | 'aerial-mapping'
  | 'inspection-monitoring'
  | 'remote-sensing'
  | 'gis-tool'
  | 'urban-master-planning'
  | 'zoning-land-use'
  | 'community-engagement';
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
      type: 'aerial-mapping',
      description: 'High-precision drone ideal for mapping, surveying, and topography.',
      image: '/assets/figma-photos/DJI Phantom 4 RTK.jpg', // Real accessible image URL
      specs: ['RTK GNSS', '20MP Camera', '1" CMOS Sensor', '30 min Flight Time']
    },
    {
      name: 'Mavic 3 Enterprise',
      type: 'remote-sensing',
      description: 'Compact and efficient for construction and infrastructure inspections.',
      image: "/assets/figma-photos/Mavic 3 Enterprise.jpg", // Real accessible image URL
      specs: ['Zoom Camera', 'Thermal Imaging', 'GPS Sync', '4K Video']
    },
    {
      name: 'DJI Air 2S',
      type: 'remote-sensing',
      description: 'Perfect for capturing events and celebrations in high resolution.',
      image: "/assets/figma-photos/DJI Air 2S.jpg", // Real accessible image URL
      specs: ['5.4K Video', 'HDR', '48MP Photos', 'Obstacle Avoidance']
    },
    {
      name: 'DJI Matrice 300',
      type: 'inspection-monitoring',
      description: 'Industrial-grade drone with multi-sensor payloads for advanced surveys.',
      image: "/assets/figma-photos/DJI Matrice 300.jpg", // Real accessible image URL
      specs: ['LiDAR Support', 'Thermal & RGB', '55 min Flight', 'AI Capabilities']
    }
  ];

  gisTools: Drone[]= [
    {
      name: 'ArcGIS Pro',
      type: 'gis-tool',
      description: 'Professional desktop GIS for advanced spatial analysis and mapping.',
      image: '/assets/figma-photos/arcgis-pro.png',
      specs: ['3D Mapping', 'Spatial Analysis', 'Data Management']
    },
    {
      name: 'QGIS',
      type: 'gis-tool',
      description: 'Open-source GIS application for data editing, mapping, and analysis.',
      image: '/assets/figma-photos/qgis.png',
      specs: ['Plugins Support', 'Data Editing', 'Raster & Vector Processing']
    },
    {
      name: 'Google Earth Engine',
      type: 'gis-tool',
      description: 'Cloud-based geospatial processing platform for big earth observation data.',
      image: '/assets/figma-photos/earth-engine.png',
      specs: ['Remote Sensing', 'Big Data Analysis', 'Time Series Monitoring']
    },
    {
      name: 'Mapbox Studio',
      type: 'gis-tool',
      description: 'Design custom web maps and tilesets with a powerful cartographic interface.',
      image: '/assets/figma-photos/mapbox-studio.png',
      specs: ['Web Mapping', 'Vector Tiles', 'Custom Styling']
    },
    {
      name: 'PostGIS',
      type: 'gis-tool',
      description: 'Spatial database extender for PostgreSQL, enabling spatial queries and storage.',
      image: '/assets/figma-photos/postgis.png',
      specs: ['Geospatial Queries', 'Spatial Indexing', 'Open Source']
    },
    {
      name: 'GeoServer',
      type: 'gis-tool',
      description: 'Open-source server for sharing geospatial data using OGC standards.',
      image: '/assets/figma-photos/geoserver.png',
      specs: ['WMS/WFS Services', 'Raster & Vector Publishing', 'Interoperability']
    },
    {
      name: 'Leaflet',
      type: 'gis-tool',
      description: 'Lightweight JavaScript library for building interactive web maps.',
      image: '/assets/figma-photos/leaflet.png',
      specs: ['Web Mapping', 'Plugins Ecosystem', 'Mobile Friendly']
    },
    {
      name: 'Carto',
      type: 'gis-tool',
      description: 'Cloud-based GIS and spatial analytics platform for business intelligence.',
      image: '/assets/figma-photos/carto.png',
      specs: ['Data Visualization', 'Spatial SQL', 'Dashboard Creation']
    }
  ];

  planningTools: Drone[] = [
    {
      name: 'CityEngine',
      type: 'urban-master-planning',
      description: 'Advanced tool for 3D city modeling and scenario planning.',
      image: '/assets/figma-photos/cityengine.png',
      specs: ['3D Urban Models', 'Scenario Planning', 'GIS Integration']
    },
    {
      name: 'UrbanFootprint',
      type: 'zoning-land-use',
      description: 'Platform for land-use analysis and environmental impact studies.',
      image: '/assets/figma-photos/urbanfootprint.png',
      specs: ['Zoning Layers', 'Impact Reports', 'Community Modeling']
    },
    {
      name: 'CoUrbanize',
      type: 'community-engagement',
      description: 'Public engagement platform to gather feedback for planning projects.',
      image: '/assets/figma-photos/courbanize.png',
      specs: ['Surveys', 'Comment Threads', 'Interactive Maps']
    },
    {
      name: 'SketchUp for Urban Design',
      type: 'urban-master-planning',
      description: '3D modeling software used for conceptual planning and massing studies.',
      image: '/assets/figma-photos/sketchup.png',
      specs: ['Architectural Modeling', 'Rapid Prototyping', 'Google Earth Integration']
    },
    {
      name: 'PlaceMaker',
      type: 'urban-master-planning',
      description: 'Plugin for SketchUp for importing real-world context into models.',
      image: '/assets/figma-photos/placemaker.png',
      specs: ['GIS Imports', '3D Terrain', 'OpenStreetMap Integration']
    },
    {
      name: 'Trello for Planning Teams',
      type: 'community-engagement',
      description: 'Collaborative planning boards for team workflows and feedback collection.',
      image: '/assets/figma-photos/trello.png',
      specs: ['Checklists', 'Team Boards', 'Stakeholder Collaboration']
    },
    {
      name: 'Esri Community Analyst',
      type: 'zoning-land-use',
      description: 'Analyze demographic, economic, and housing data for better planning decisions.',
      image: '/assets/figma-photos/community-analyst.png',
      specs: ['Demographic Reports', 'Drive-Time Analysis', 'Site Suitability']
    }
  ];
  

  filterDrones() {
    const allItems = [...this.allDrones, ...this.gisTools, ...this.planningTools];
    this.filteredDrones = allItems.filter(item => item.type === this.selectedType);
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
