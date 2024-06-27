import { Component, Input } from '@angular/core';
import { ITEMS } from '../mock-item';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  listItems = ITEMS;
  @Input() items: Item[] = [];
}
