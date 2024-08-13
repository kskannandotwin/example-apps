import { Component } from '@angular/core';
import { blockTransition } from '../animations/blockTransition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [blockTransition],
  host: {
    '[@blockTransition]': ''
  }
})
export class HomeComponent {

}
