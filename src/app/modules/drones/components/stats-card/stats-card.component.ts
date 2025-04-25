import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css'
})
export class StatsCardComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() icon = '';
  @Input() color = 'bg-primary-100';

}
