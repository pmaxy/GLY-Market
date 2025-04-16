import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this._elementRef.nativeElement.contains(target);
    if (!clickedInside) this.clickOutside.emit();
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  logout() {
    console.log('🚪 Logging out...');
    // Implement logout logic
  }

  handleMobileSearchClick() {
    console.log('📱 Triggering mobile search...');
    // Show mobile search input, modal, etc.
  }

}
