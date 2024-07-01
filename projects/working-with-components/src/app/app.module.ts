import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroMainComponent } from './hero-main/hero-main.component';
import { QuestSummaryComponent } from './quest-summary/quest-summary.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroControlsComponent } from './hero-controls/hero-controls.component';
import { HeroTeamComponent } from './hero-team/hero-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroMainComponent,
    QuestSummaryComponent,
    HeroDetailsComponent,
    HeroControlsComponent,
    HeroTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
