import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>(''); // '' = light, 'dark' = dark
  theme$ = this.themeSubject.asObservable();

  setTheme(theme: string) {
    this.themeSubject.next(theme);
    // Optional: persist to localStorage
    localStorage.setItem('theme', theme);
  }

  get currentTheme() {
    return this.themeSubject.getValue();
  }

  loadInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.setTheme(saved);
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? '' : 'dark';
    this.setTheme(newTheme);
  }
}
