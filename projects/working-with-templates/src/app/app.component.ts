import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

export enum Color { Red, Green, Blue }

/**
 * Giant grab bag of stuff to drive the chapter
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  fontSizePx = 16;
  title = 'Template Syntax';
  ngOnInit(): void {
    this.resetHeroes();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  actionName = 'Go for it';
  badCurly = 'bad curly';
  classes = 'special';
  help = '';
  canSave = true;

  callPhone(value: string) {
    this.alert(`Calling ${value} ...`);
  }


  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }

  alert(msg?: string) {
    window.alert(msg);
  }

  clicked = '';
  clickMessage = '';
  clickMessage2 = '';

  Color = Color;
  color = Color.Red;
  colorToggle() { this.color = (this.color === Color.Red) ? Color.Blue : Color.Red; }

  getVal() {
    return 2;
  }

  currentHero!: Hero;

  updateCurrentHeroName(event: Event) {
    this.currentHero.name = (event.target as any).value;
  }

  deleteHero(hero?: Hero) {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}.`);
  }

  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    this.alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  onSubmit(data: any) {
    /* referenced but not used */
  }

  product = {
    name: 'frimfram',
    price: 42
  };

  name: string = Hero.heroes[0].name || '';
  hero!: Hero;
  heroes: Hero[] = [];

  // trackBy change counting
  heroesNoTrackByCount = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;

  heroIdIncrement = 1;

  heroImageUrl = 'assets/images/hero.svg';
  // villainImageUrl = 'http://www.clker.com/cliparts/u/s/y/L/x/9/villain-man.svg'
  // Public Domain terms of use https://www.clker.com/disclaimer.html
  villainImageUrl = 'assets/images/villain.svg';
  iconUrl = 'assets/images/ng-logo.svg';
  isActive = false;
  isSpecial = true;
  isUnchanged = true;

  get nullHero(): Hero | null { return null; }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event ? ' Event target class is ' + (event.target as HTMLElement).className : '';
    this.alert('Click me.' + evtMsg);
  }
  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
  }

  setUppercaseName(name: string) {
    this.currentHero.name = name.toUpperCase();
  }

  currentClasses: Record<string, boolean> = {};

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    };
  }

  currentStyles: Record<string, string> = {};

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    };
  }

  trackByHeroes(index: number, hero: Hero): number { return hero.id; }
  trackById(index: number, item: any): number { return item.id; }
}