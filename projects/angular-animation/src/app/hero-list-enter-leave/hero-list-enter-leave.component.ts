import { Component, Input } from '@angular/core';
import { Hero } from '../../assets/hero';

@Component({
  selector: 'app-hero-list-enter-leave',
  templateUrl: './hero-list-enter-leave.component.html',
  styleUrls: ['./hero-list-enter-leave.component.scss']
})
export class HeroListEnterLeaveComponent {
  @Input() heroes: Hero[] = [];
}
