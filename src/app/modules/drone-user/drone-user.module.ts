import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroneUserRoutingModule } from './drone-user-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ServicesComponent } from './pages/services/services.component';
import { MaterialModule } from '../../../material.module';
import { DroneListsComponent } from './pages/drone-lists/drone-lists.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ClickOutsideDirective } from '../../click-outside-directive';



@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    MyBookingsComponent,
    ProfileComponent,
    ServicesComponent,
    DroneListsComponent,
    SpinnerComponent,


  ],
  imports: [
    CommonModule,
    DroneUserRoutingModule,
    MaterialModule
  ]
})
export class DroneUserModule { }
