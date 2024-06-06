import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page/hero-list-enter-leave-page.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave/hero-list-enter-leave.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { ToggleAnimationsPageComponent } from './toggle-animations-page/toggle-animations-page.component';
import { OpenCloseChildComponent } from './open-close-child/open-close-child.component';
import { HeroListAutoPageComponent } from './hero-list-auto-page/hero-list-auto-page.component';
import { HeroListAutoComponent } from './hero-list-auto/hero-list-auto.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { HeroListGroupsComponent } from './hero-list-groups/hero-list-groups.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { QueryingComponent } from './querying/querying.component';
import { MeOpenCloseChildComponent } from './me-open-close-child/me-open-close-child.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    HomeComponent,
    AboutComponent,
    HeroListEnterLeavePageComponent,
    HeroListEnterLeaveComponent,
    StatusSliderComponent,
    ToggleAnimationsPageComponent,
    OpenCloseChildComponent,
    HeroListAutoPageComponent,
    HeroListAutoComponent,
    HeroListPageComponent,
    HeroListGroupPageComponent,
    HeroListGroupsComponent,
    InsertRemoveComponent,
    QueryingComponent,
    MeOpenCloseChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
