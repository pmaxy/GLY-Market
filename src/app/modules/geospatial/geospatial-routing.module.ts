import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeodataComponent } from './pages/geodata/geodata.component';
import { GeoanalyticsComponent } from './pages/geoanalytics/geoanalytics.component';
import { GeoreportsComponent } from './pages/georeports/georeports.component';
import { GeoplanningComponent } from './pages/geoplanning/geoplanning.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

const routes: Routes = [
    {
      path: "",
      component: DashboardComponent,
      children:[
        {
          path: "",
          component: GeodataComponent,
          pathMatch: 'full'
        },
        {
          path: "geodata",
          component: GeodataComponent,
  
        },
        {
          path: "geoanalytics",
          component: GeoanalyticsComponent,
  
        },
        {
          path: "georeports",
          component: GeoreportsComponent,
        },
        {
          path: "geoplanning",
          component: GeoplanningComponent,
        },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeospatialRoutingModule { }
