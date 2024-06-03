import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-list-enter-leave-page',
  templateUrl: './hero-list-enter-leave-page.component.html',
  styleUrls: ['./hero-list-enter-leave-page.component.scss']
})
export class HeroListEnterLeavePageComponent {
  heroes = HEROES;
}
