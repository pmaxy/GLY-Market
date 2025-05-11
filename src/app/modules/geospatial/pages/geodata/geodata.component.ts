import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
type LayerKey = 'vegetation' | 'riskZones' | 'urbanPlanning'; 

@Component({
  selector: 'app-geodata',
  templateUrl: './geodata.component.html',
  styleUrls: ['./geodata.component.css']
})
export class GeodataComponent implements OnInit {
  map: any;
  vegetationLayer: L.LayerGroup = L.layerGroup();
  riskZonesLayer: L.LayerGroup = L.layerGroup();
  urbanPlanningLayer: L.LayerGroup = L.layerGroup();

  lat: number = 1.286389;
  lng: number = 36.817223;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lng],
      zoom: 8,
      zoomControl: false // Move zoom control manually
    });

    // Base map (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Move zoom control to bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    // Scale bar
    L.control.scale().addTo(this.map);

    // Listen to mousemove to update coordinates
    this.map.on('mousemove', (e: any) => {
      this.lat = e.latlng.lat;
      this.lng = e.latlng.lng;
    });

    // Initialize layers (example placeholder content)
    this.vegetationLayer = L.layerGroup([
      L.circle([this.lat, this.lng], { radius: 500, color: 'green' }).bindPopup('Vegetation Area')
    ]);

    this.riskZonesLayer = L.layerGroup([
      L.polygon([
        [this.lat + 0.01, this.lng + 0.01],
        [this.lat + 0.01, this.lng - 0.01],
        [this.lat - 0.01, this.lng - 0.01],
        [this.lat - 0.01, this.lng + 0.01]
      ], { color: 'red' }).bindPopup('Risk Zone')
    ]);

    this.urbanPlanningLayer = L.layerGroup([
      L.marker([this.lat, this.lng], { title: 'Urban Center' }).bindPopup('Urban Planning Zone')
    ]);
  }


  toggleLayer(layer: LayerKey): void { // ✨ FIXED
    const layers = {
      vegetation: this.vegetationLayer,
      riskZones: this.riskZonesLayer,
      urbanPlanning: this.urbanPlanningLayer
    };

    if (this.map.hasLayer(layers[layer])) {
      this.map.removeLayer(layers[layer]);
    } else {
      layers[layer].addTo(this.map);
    }
  }
  
  resetMap(): void {
    this.map.setView([this.lat, this.lng], 12);
    this.map.eachLayer((layer: any) => {
      if (!(layer instanceof L.TileLayer)) {
        this.map.removeLayer(layer);
      }
    });
  }
}
