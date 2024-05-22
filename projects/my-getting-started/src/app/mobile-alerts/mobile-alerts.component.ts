import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mobile } from '../products';

@Component({
  selector: 'app-mobile-alerts',
  templateUrl: './mobile-alerts.component.html',
  styleUrls: ['./mobile-alerts.component.scss']
})
export class MobileAlertsComponent {
  @Input() mobile: Mobile | undefined;
  @Output() notify = new EventEmitter();
}
