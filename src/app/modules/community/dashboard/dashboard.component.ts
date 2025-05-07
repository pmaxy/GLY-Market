import { Component, HostListener, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs';
import { ThemeService } from '../../../theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  themeClass = '';
  isSidebarVisible = false;  // Initially hidden
  isDesktop = window.innerWidth > 768;
  isLoading: boolean = false;
  showSidebar = true;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private ngZone: NgZone,
    private themeService: ThemeService
    
  ) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (!this.isDesktop) {
        this.showSidebar = false;
        this.isSidebarVisible = false;
      }
    });

  }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.themeClass = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
  onSidebarClose(): void {
    this.showSidebar = false;
    this.isSidebarVisible = false; // Also hide the animated sidebar
  }
  // Toggle sidebar visibility
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth > 768;
    if (this.isDesktop) {
      // Optionally hide the sidebar on desktop resize if needed
      this.isSidebarVisible = false;
    }
  }
  logout() {
    this.isLoading = true
    this.ngZone.run(() => {
      this.spinner.show();
      setTimeout(() => {
        this.router.navigate([''])
        localStorage.clear();
        this.spinner.hide();
        this.isLoading = false;
      }, 2000)
    })

  }


}
