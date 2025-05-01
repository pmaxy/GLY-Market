import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendarCheck, faCogs, faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    @Output() logout = new EventEmitter<void>();
  
  faCalendarCheck = faCalendarCheck;
  faCogs = faCogs;
  faUserCircle = faUserCircle;
  faRightFromBracket = faRightFromBracket;
  constructor(
    private router:Router
  ){

  }


}
