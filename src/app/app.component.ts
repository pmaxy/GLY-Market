import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IonicModule,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'point-of-sale';
  themeClass = '';

  
  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer
  ) {}
  
  ngOnInit() {
    this.themeService.loadInitialTheme();
  
    this.themeService.theme$.subscribe(theme => {
      this.themeClass = theme;
  
      const container = this.overlayContainer.getContainerElement();
  
      if (theme === 'dark') {
        container.classList.add('dark');
      } else {
        container.classList.remove('dark');
      }
    });
  }
  
  
  // @HostListener('document:contextmenu', ['$event'])
  // onRightClick(event: MouseEvent) {
  //   event.preventDefault();
  // }

  // @HostListener('document:keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   if (
  //     (event.ctrlKey && event.shiftKey && event.key === 'I') || // Ctrl+Shift+I
  //     (event.ctrlKey && event.shiftKey && event.key === 'J') || // Ctrl+Shift+J
  //     (event.ctrlKey && event.key === 'U') ||                   // Ctrl+U
  //     (event.key === 'F12')                                     // F12
  //   ) {
  //     event.preventDefault();
  //   }
  // }
}


