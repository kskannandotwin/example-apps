import { Component, Input } from '@angular/core';
import { Hero } from '../../assets/hero';

@Component({
  selector: 'app-happy-hero',
  templateUrl: './happy-hero.component.html',
  styleUrls: ['./happy-hero.component.scss']
})
export class HappyHeroComponent {
  @Input() hero!: Hero;
}
