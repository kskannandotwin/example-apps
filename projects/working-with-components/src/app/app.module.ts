import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { VoterComponent } from './voter/voter.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentTwoComponent } from './countdown-parent-two/countdown-parent-two.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { AstronautComponent } from './astronaut/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoteTakerComponent,
    VoterComponent,
    CountdownParentComponent,
    CountdownTimerComponent,
    CountdownParentTwoComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
