import { Component } from '@angular/core';
import { Item, items } from '../items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items = [...items];
  share() {
    window.alert('The item has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the item goes on sale');
  }
}
