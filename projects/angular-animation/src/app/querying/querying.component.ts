import { animate, animateChild, group, keyframes, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-querying',
  templateUrl: './querying.component.html',
  styleUrls: ['./querying.component.scss'],
  animations: [
    trigger('query', [
      transition(':enter', [
        style({ height: 0 }),
        group([
          animate(500, style({ height: '*' })),
          query(':enter', [
            style({ opacity: 0, transform: 'scale(0)' }),
            animate(2000, style({ opacity: 1, transform: 'scale(1)' }))
          ]),
          query('.hero', [
            style({ transform: 'translateX(-100%)' }),
            animate('.7s 500ms ease-in', style({ transform: 'translateX(0)' }))
          ]),
        ]),
        query('@animateMe', animateChild()),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        query('@animateMe', animateChild()),
        group([
          animate('500ms 500ms', style({ height: '0', padding: '0' })),
          query(':leave', [
            style({ opacity: 1, transform: 'scale(1)' }),
            animate('1s', style({ opacity: 0, transform: 'scale(0)' }))
          ]),
          query('.hero', [
            style({ transform: 'translateX(0)' }),
            animate('.7s ease-out', style({ transform: 'translateX(-100%)' }))
          ]),
        ]),
      ]),
    ]),
    trigger('animateMe', [
      transition('* <=> *', animate('500ms cubic-bezier(.68,-0.73,.26,1.65)', keyframes([
        style({
          backgroundColor: 'transparent',
          color: '*',
          offset: 0
        }),
        style({
          backgroundColor: 'blue',
          color: 'white',
          offset: 0.2
        }),
        style({
          backgroundColor: 'transparent',
          color: '*',
          offset: 1
        }),
      ])))
    ])
  ]
})
export class QueryingComponent {
  show = true;
  hero = HEROES[0];
  toggleDisabled = false;
}
