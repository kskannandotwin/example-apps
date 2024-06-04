import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close-child',
  templateUrl: './open-close-child.component.html',
  styleUrls: ['./open-close-child.component.scss'],
  animations: [
    trigger('childAnimation', [
      state('open', style({
        width: '250px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ])
  ]
})
export class OpenCloseChildComponent {

  isDisabled = false;
  isOpen = false;
  toggleAnimations() {
    this.isDisabled = !this.isDisabled;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
    
}
