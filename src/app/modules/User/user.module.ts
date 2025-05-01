import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/home-main/dashboard/dashboard.component';
import { HomeComponent } from './main/home-main/home/home.component';
import { SettingsComponent } from './main/home-main/settings/settings.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms';
import { MiniSidebarComponent } from './main/mini-sidebar/mini-sidebar.component';
import { ProductsComponent } from './main/home-main/products/products.component';
import { FormComponent } from './main/home-main/products/form/form.component';
import { DeleteDialogComponent } from './main/home-main/products/delete-dialog/delete-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    SettingsComponent,
    MainComponent,
    MiniSidebarComponent,
    ProductsComponent,
    FormComponent,
    DeleteDialogComponent



  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserRoutingModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    FontAwesomeModule
  
    
  ]
})
export class UserModule { }
