import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // heroes = HEROES;

  // selectedHero?: Hero;
  // hero = 'Windstorm';

  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  // }

  // gotoDetail() {
  //   console.log('detail');
  // }
}
