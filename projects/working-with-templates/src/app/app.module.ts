import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroBirthdayOneComponent } from './hero-birthday-one/hero-birthday-one.component';
import { HeroBirthdayTwoComponent } from './hero-birthday-two/hero-birthday-two.component';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';
import { FormsModule } from '@angular/forms';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { FlyingHeroesImpureComponent } from './flying-heroes-impure/flying-heroes-impure.component';
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';
import { FlyingHeroesImpurePipe } from './flying-heroes-impure.pipe';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FetchJsonPipe } from './fetch-json.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PrecedenceComponent } from './precedence/precedence.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayOneComponent,
    HeroBirthdayTwoComponent,
    PowerBoosterComponent,
    ExponentialStrengthPipe,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpureComponent,
    HeroAsyncMessageComponent,
    FlyingHeroesImpurePipe,
    HeroListComponent,
    FetchJsonPipe,
    PrecedenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
