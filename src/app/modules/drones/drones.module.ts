import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DronesRoutingModule } from './drones-routing.module';
import { MaterialModule } from '../../../material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CeremoniesComponent } from './pages/ceremonies/ceremonies.component';
import { GeospatialComponent } from './pages/geospatial/geospatial.component';
import { OverviewComponent } from './pages/overview/overview.component';


@NgModule({
  declarations: [
   DashboardComponent,
   SidebarComponent,
   StatsCardComponent,
   TopbarComponent,
   CeremoniesComponent,
   GeospatialComponent,
   OverviewComponent,
   
  ],
  imports: [
    CommonModule,
    DronesRoutingModule,
    MaterialModule

  ]
})
export class DronesModule { }
