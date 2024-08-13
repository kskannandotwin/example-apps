import { animate, animateChild, group, query, sequence, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const transition1 = transition('* => *', [
  sequence([
    group([
      query('app-child', animateChild({ duration: '0.5s' }), { optional: true })
    ]),
    animate('2000ms', style({ transform: 'translateX(80%)' })),
    animate('2000ms', style({ transform: 'translateX(0)' })),
  ])
]);

const trigger1 = trigger('listAnimation', [
  transition('* => *', [ // each time the binding value changes
    query(':leave', [
      stagger(-100, [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 }),
      stagger(500, [
        animate('0.5s', style({ opacity: 1 }))
      ])
    ], { optional: true }),
  ]),
  transition1
]);

const trigger2 = trigger('animateChildren', [
  transition(':enter', [
    query('app-child', animateChild(), { optional: true })
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger1,
    trigger2
  ]
})
export class AppComponent {
  title = 'getting-started';

  items:number[] = [];

  showItems() {
    this.items = [0, 1, 2, 3, 4];
  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }
}
