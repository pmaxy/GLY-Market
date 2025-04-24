import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { EducationComponent } from './pages/education/education.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { NewsfeedsComponent } from './pages/newsfeeds/newsfeeds.component';
import { EventsComponent } from './pages/events/events.component';
import { HelpComponent } from './pages/help/help.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { SettingdComponent } from './pages/settingd/settingd.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children:[
      {
        path: "",
        component: ChatsComponent,
        pathMatch: 'full'
      },
      {
        path: "chat",
        component: ChatsComponent,

      },
      {
        path: "education",
        component: EducationComponent,
      },
      {
        path: "opportunity",
        component: OpportunitiesComponent,
      },
      {
        path: "newsfeed",
        component: NewsfeedsComponent,
      },
      {
        path: "events",
        component: EventsComponent,
      },
      {
        path: "help",
        component: HelpComponent,
      },
      {
        path: "language",
        component: LanguagesComponent,
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "setting",
        component: SettingdComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule {

 }
