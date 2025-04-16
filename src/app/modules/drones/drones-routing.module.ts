import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeospatialComponent } from './pages/geospatial/geospatial.component';
import { CeremoniesComponent } from './pages/ceremonies/ceremonies.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children:[
        {
          path: 'geodrone',
          component: OverviewComponent
        },
        {
          path: '',
          pathMatch: 'full',
          component: OverviewComponent
        },
        {
          path: 'ceremony',
          component: CeremoniesComponent
        },
        {
          path: 'geodrone',
          component: GeospatialComponent
        },
        {
          path: 'topbar',
          component: TopbarComponent
        },
        {
          path: 'sidebar',
          component: SidebarComponent
        },
        {
          path: 'stats',
          component: StatsCardComponent
        }    
      ]
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DronesRoutingModule { }
