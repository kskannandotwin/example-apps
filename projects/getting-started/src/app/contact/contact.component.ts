import { Component } from '@angular/core';
import { compTransition } from '../animations/compTransition';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [compTransition],
  host: {
    '[@compTransition]': ''
  }
})
export class ContactComponent {

  tiles = [
    { text: '<h1>One</h1>', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
}
