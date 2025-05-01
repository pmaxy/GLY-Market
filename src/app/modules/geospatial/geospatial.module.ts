import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeospatialRoutingModule } from './geospatial-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeoanalyticsComponent } from './pages/geoanalytics/geoanalytics.component';
import { MaterialModule } from '../../../material.module';
import { GeodataComponent } from './pages/geodata/geodata.component';
import { GeoreportsComponent } from './pages/georeports/georeports.component';
import { GeoplanningComponent } from './pages/geoplanning/geoplanning.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ClickOutsideDirective } from '../../click-outside-directive';


@NgModule({
  declarations: [
    DashboardComponent,
    GeoanalyticsComponent,
    GeodataComponent,
    GeoreportsComponent,
    GeoplanningComponent,
    TopbarComponent,
    SidebarComponent,
    SpinnerComponent,
    
  ],
  imports: [
    CommonModule,
    GeospatialRoutingModule,
    MaterialModule,
    LeafletModule,
    NgApexchartsModule

    
  ]
})
export class GeospatialModule { }
