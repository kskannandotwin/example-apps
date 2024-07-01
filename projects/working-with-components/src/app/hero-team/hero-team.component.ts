import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-team',
  templateUrl: './hero-team.component.html',
  styleUrls: ['./hero-team.component.scss']
})
export class HeroTeamComponent {
  @Input() hero!: Hero;
}
