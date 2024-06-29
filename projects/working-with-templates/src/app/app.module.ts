import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { ClickDirective } from './click.directive';
import { BigHeroDetailComponent } from './big-hero-detail/big-hero-detail.component';
import { SizerComponent } from './sizer/sizer.component';
import { HappyHeroComponent } from './happy-hero/happy-hero.component';
import { SadHeroComponent } from './sad-hero/sad-hero.component';
import { ConfusedHeroComponent } from './confused-hero/confused-hero.component';
import { UnknownHeroComponent } from './unknown-hero/unknown-hero.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { SvgComponent } from './svg/svg.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    ClickDirective,
    BigHeroDetailComponent,
    SizerComponent,
    HappyHeroComponent,
    SadHeroComponent,
    ConfusedHeroComponent,
    UnknownHeroComponent,
    HeroFormComponent,
    SvgComponent
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
