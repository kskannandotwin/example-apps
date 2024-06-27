import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HappyHeroComponent } from './happy-hero/happy-hero.component';
import { SadHeroComponent } from './sad-hero/sad-hero.component';
import { ConfusedHeroComponent } from './confused-hero/confused-hero.component';
import { UnknownHeroComponent } from './unknown-hero/unknown-hero.component';
import { UnlessDirective } from './unless.directive';
import { HeroComponent } from './hero/hero.component';
import { IfLoadedDirective } from './if-loaded.directive';
import { TrigonometryDirective } from './trigonometry.directive';
@NgModule({
  declarations: [
    AppComponent,
    HappyHeroComponent,
    SadHeroComponent,
    ConfusedHeroComponent,
    UnknownHeroComponent,
    UnlessDirective,
    HeroComponent,
    IfLoadedDirective,
    TrigonometryDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
