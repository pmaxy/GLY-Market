import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingdComponent } from './pages/settingd/settingd.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { NewsfeedsComponent } from './pages/newsfeeds/newsfeeds.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { HelpComponent } from './pages/help/help.component';
import { EventsComponent } from './pages/events/events.component';
import { EducationComponent } from './pages/education/education.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    ProfileComponent,
    SettingdComponent,
    OpportunitiesComponent,
    NewsfeedsComponent,
    LanguagesComponent,
    HelpComponent,
    EventsComponent,
    EducationComponent,
    ChatsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CommunityModule { }
