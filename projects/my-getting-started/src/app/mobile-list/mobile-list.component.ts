import { Component } from '@angular/core';
import { mobiles } from '../products';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent {
  mobiles = mobiles;

  share() {
    alert('The product has been shared!');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
