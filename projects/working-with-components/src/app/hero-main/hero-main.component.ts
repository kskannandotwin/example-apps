import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-main',
  templateUrl: './hero-main.component.html',
  styleUrls: ['./hero-main.component.scss']
})
export class HeroMainComponent {
  @Input() hero!: Hero;
}
