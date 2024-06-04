import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../../assets/hero';

@Component({
  selector: 'app-hero-list-group-page',
  templateUrl: './hero-list-group-page.component.html',
  styleUrls: ['./hero-list-group-page.component.scss']
})
export class HeroListGroupPageComponent {
  heroes = HEROES.slice();

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }


}
