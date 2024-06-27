import { Component } from '@angular/core';
import { HEROES } from '../heroes';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.scss']
})
export class FlyingHeroesComponent {
  title = 'Flying Heroes (pure pipe)';
  heroes: any[] = [];

  canFly = true;
  mutate = true;

  constructor() {
    this.reset();
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero = {
      name, canFly: this.canFly
    };
    if (this.mutate) {
      // Pure pipe won't update display because heroes array reference is unchanged
      // Impure pipe will display
      this.heroes.push(hero);
    } else {
      // Pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() {
    this.heroes = HEROES.slice();
  }
}
