import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../assets/hero';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hero-list-enter-leave',
  templateUrl: './hero-list-enter-leave.component.html',
  styleUrls: ['./hero-list-enter-leave.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class HeroListEnterLeaveComponent {
  @Input() heroes: Hero[] = [];
  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}
