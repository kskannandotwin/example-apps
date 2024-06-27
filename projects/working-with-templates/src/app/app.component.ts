import { Component } from '@angular/core';
import { Hero, heroes } from '../assets/hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Working with Templates';

  heroes = heroes;
  hero: Hero | null = this.heroes[0];
  showSad = true;
  condition = false;

  trackById(index: number, hero: Hero): number {
    return hero.id;
  }
}
