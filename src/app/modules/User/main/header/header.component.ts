import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  // standalone: true,
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleMiniSidebar = new EventEmitter<void>();


  constructor(private cdr: ChangeDetectorRef){}
  onToggleSidebar() {
    this.toggleSidebar.emit(); // Emit the toggle event
  }
  onToggleMiniSidebar() {
    this.toggleMiniSidebar.emit(); // Emit the toggle event
    this.cdr.detectChanges();
  }
}
