import { Component, ViewChild } from '@angular/core';
import { Hero, heroes } from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Template Expression Operators';

  heroes = heroes;
  hero: Hero | null  = this.heroes[0];
  heroTraits = ['honest', 'brave', 'considerate'];

  attrDirs = true;
  strucDirs = true;
  divNgIf = false;

  showId = true;
  showDefaultTraits = true;
  showSad = true;
}
