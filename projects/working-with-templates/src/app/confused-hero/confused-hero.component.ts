import { Component, Input } from '@angular/core';
import { Hero } from '../../assets/hero';

@Component({
  selector: 'app-confused-hero',
  templateUrl: './confused-hero.component.html',
  styleUrls: ['./confused-hero.component.scss']
})
export class ConfusedHeroComponent {
  @Input() hero!: Hero;
}
