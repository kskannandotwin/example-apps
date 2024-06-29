import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-big-hero-detail',
  templateUrl: './big-hero-detail.component.html',
  styleUrls: ['./big-hero-detail.component.scss']
})
export class BigHeroDetailComponent extends HeroDetailComponent {
  @Input() override hero!: Hero;
  @Output() override deleteRequest = new EventEmitter<Hero>();

  override delete() {
    this.deleteRequest.emit(this.hero);
  }
}
