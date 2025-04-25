import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
 @Output() toggleSidebar = new EventEmitter<void>();
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private _elementRef: ElementRef, private router:Router) {}

  // Flag to determine whether the screen is desktop or mobile
  isDesktop: boolean = window.innerWidth > 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Recalculate desktop/mobile view on resize
    this.isDesktop = event.target.innerWidth > 768;
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();  // Emit event to parent to toggle sidebar visibility
  }
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  handleMobileSearchClick() {
    console.log('📱 Triggering mobile search...');
    // Show mobile search input, modal, etc.
  }
}
