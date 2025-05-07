import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faTachometerAlt, faBoxOpen, faCog, faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../../../theme.service';

// import { ToastrService } from 'ngx-toastr';
// import { ServiceService } from '../../Content/service.service';

@Component({
  selector: 'app-sidebar',
  // standalone: true,
  // imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    @Output() logout = new EventEmitter<void>();
    @Output() closeSidebar = new EventEmitter<void>();
  faHome = faHome;
  faDashboard = faTachometerAlt;
  faProducts = faBoxOpen;
  faSettings = faCog;
  faLogout = faRightFromBracket;
  faProfile = faUserCircle;

  isHidden1=true
  isHidden=true
  isHidden2=true
  @Input() isOpen = false;  
  constructor(private router:Router,public themeService: ThemeService
    //  private toast:ToastrService, 
    //  private service:ServiceService
    ){
  //   this.service.sidebarVisible$.subscribe(visible => {
  //     this.sidebarVisible = visible;
  //  
  };

  closeNav1(){
    this.isHidden1=!this.isHidden1

  }
  closeNav(){
    this.isHidden=!this.isHidden

  }
  closeNav2(){
    this.isHidden2=!this.isHidden2

  }
  signOut(){
    sessionStorage.clear();
    this.router.navigate(['/Login'])
    // this.toast.success('Logged out successfully')

}

onNavigate() {
  if (window.innerWidth <= 768) {
    this.closeSidebar.emit();
  }
}

toggleTheme() {
  this.themeService.toggleTheme();
}

}
