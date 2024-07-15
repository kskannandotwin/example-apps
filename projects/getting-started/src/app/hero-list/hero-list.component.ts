import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  providers: [ HeroService]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  
}
