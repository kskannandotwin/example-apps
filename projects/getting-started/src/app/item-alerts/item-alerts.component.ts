import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'app-item-alerts',
  templateUrl: './item-alerts.component.html',
  styleUrls: ['./item-alerts.component.scss']
})
export class ItemAlertsComponent {
  @Input() item: Item | undefined;
  @Output() notify = new EventEmitter();
}
