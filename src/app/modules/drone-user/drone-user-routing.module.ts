import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { ServicesComponent } from './pages/services/services.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DroneListsComponent } from './pages/drone-lists/drone-lists.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
      {
        path: '',
        component: DashboardComponent,
        children:[
          {
            path: 'book',
            component: MyBookingsComponent
          },
          {
            path: '',
            pathMatch: 'full',
            component: MyBookingsComponent
          },
          {
            path: 'service',
            component: ServicesComponent
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
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'services/:type',
            component: DroneListsComponent
          }

        ]
        }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroneUserRoutingModule { }
