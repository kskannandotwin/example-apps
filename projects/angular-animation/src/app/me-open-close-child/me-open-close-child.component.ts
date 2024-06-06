import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-me-open-close-child',
  templateUrl: './me-open-close-child.component.html',
  styleUrls: ['./me-open-close-child.component.scss'],
  animations: [
    trigger('openClose', [
      state('yellow', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('red', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'red'
      })),
      transition('* => *', [
        animate(300)
      ])
    ])
  ]
})
export class MeOpenCloseChildComponent {

  isDisabled = false;
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  disableAnimation() {
    this.isDisabled = !this.isDisabled;
  }
}
