import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-status-slider',
  templateUrl: './status-slider.component.html',
  styleUrls: ['./status-slider.component.scss'],
  animations: [
    trigger('sliderAnimation', [
      state('inactive', style({ width: '0%' })),
      state('active', style({ width: '100%' })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class StatusSliderComponent {
  status: 'active' | 'inactive' = 'inactive';

  toggleStatus() {
    this.status = this.status === 'active' ? 'inactive' : 'active';
  }
}
