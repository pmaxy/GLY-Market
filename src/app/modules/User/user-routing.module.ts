import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { HomeComponent } from './main/home-main/home/home.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { MiniSidebarComponent } from './main/mini-sidebar/mini-sidebar.component';
import { DashboardComponent } from './main/home-main/dashboard/dashboard.component';
import { SettingsComponent } from './main/home-main/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sidebar',
        component: SidebarComponent
      },
      {
        path: 'mini-sidebar',
        component: MiniSidebarComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
