import { Component } from '@angular/core';
import { Hero, heroes } from '../../assets/hero';
import { LoadingState } from '../loading-state';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  heroLoadingState: LoadingState<Hero> = { type: 'loading' };

  onLoadHero(): void {
    this.heroLoadingState = { type: 'loaded', data: heroes[0] };
  }
}
