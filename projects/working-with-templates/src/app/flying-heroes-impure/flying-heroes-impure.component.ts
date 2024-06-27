import { Component } from '@angular/core';
import { FlyingHeroesComponent } from '../flying-heroes/flying-heroes.component';

@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styleUrls: ['./flying-heroes-impure.component.scss']
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  override title = 'Flying Heroes (impure pipe)';
}
