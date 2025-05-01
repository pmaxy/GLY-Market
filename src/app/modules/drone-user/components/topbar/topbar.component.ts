import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  isDropdownOpen = false;

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {}

  handleMobileSearchClick() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        // Show a search modal or toggle sidebar for simplicity
        this.toggleSidebar.emit();
      }
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
  onNavigate(route?: string): void {
    this.closeDropdown();
    this.isDropdownOpen = false;
    if (route) {
      this.router.navigate([route]);
    }
  }
}
