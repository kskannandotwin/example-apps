import { Component, EventEmitter, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  inputs: ['hero'],
  outputs: ['deleteRequest'],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  hero = new Hero(-1, '', 'Zzzzz'); // default sleeping hero
  // heroImageUrl = 'https://wpclipart.com/cartoon/people/hero/hero_silhoutte.png.html';
  // Public Domain terms of use: https://wpclipart.com/terms.html
  heroImageUrl = 'assets/images/hero.svg';
  lineThrough = '';

  @Input() prefix = '';

  // This component makes a request but it can't actually delete a hero.
  deleteRequest = new EventEmitter<Hero>();

  delete() {
    this.deleteRequest.emit(this.hero);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
