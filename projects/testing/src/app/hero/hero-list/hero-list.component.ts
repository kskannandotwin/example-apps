import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../model/hero';
import { Router } from '@angular/router';
import { HeroService } from '../../model/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  heroes: Observable<Hero[]>;
  selectedHero!: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.router.navigate(['../heroes', this.selectedHero.id]);
  }
}
