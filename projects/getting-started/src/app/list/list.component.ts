import { Component } from '@angular/core';
import { listTransition } from '../animations/listTransition';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [listTransition]
})
export class ListComponent {
  constructor() { }

  items: any = [];

  ngOnInit() {

  }

  showItems() {
    this.items = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }
}
