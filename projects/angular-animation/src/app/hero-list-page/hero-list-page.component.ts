import { Component, HostBinding } from '@angular/core';
import { Hero } from '../../assets/hero';
import { HEROES } from '../mock-heroes';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hero-list-page',
  templateUrl: './hero-list-page.component.html',
  styleUrls: ['./hero-list-page.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero', [
          style({
            opacity: 0,
            transform: 'translateY(-100px)'
          }),
          stagger(30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({
                opacity: 1,
                transform: 'none'
              }))
          ])
        ])
      ]),
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({
            opacity: 0,
            width: 0
          }),
          stagger(50, [
            animate('300ms ease-out', style({
              opacity: 1,
              width: '*'
            }))
          ])
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({
              opacity: 0,
              width: 0
            }))
          ])
        ])
      ])
    ])

  ]
})
export class HeroListPageComponent {
  @HostBinding('@pageAnimations')
  public animatePage = true;

  heroesTotal = -1;

  get heroes() { return this._heroes; }
  private _heroes: Hero[] = [];

  ngOnInit(): void {
    this._heroes = HEROES;
  }

  updateCriteria(criteria: string) {
    criteria = criteria ?  criteria.trim() : '';
    this._heroes = HEROES.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this._heroes.length;

    if(this.heroesTotal !== newTotal) {
      this.heroesTotal = newTotal;
    } else if(!criteria) {
      this.heroesTotal = -1;
    }
  }
}
