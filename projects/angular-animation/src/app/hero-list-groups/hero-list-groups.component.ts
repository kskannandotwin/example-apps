import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../assets/hero';
import { animate, group, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hero-list-groups',
  templateUrl: './hero-list-groups.component.html',
  styleUrls: ['./hero-list-groups.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        width: '*',
        transform: 'translateX(0)', opacity: 1
      })),
      transition(':enter', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: '*'
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition(':leave', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HeroListGroupsComponent {
  @Input() heroes: Hero[] = [];

  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}
