import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page/hero-list-enter-leave-page.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { ToggleAnimationsPageComponent } from './toggle-animations-page/toggle-animations-page.component';
import { animation } from '@angular/animations';
import { HeroListAutoPageComponent } from './hero-list-auto-page/hero-list-auto-page.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { QueryingComponent } from './querying/querying.component';

const routes: Routes = [
  { path: '', redirectTo: '/enter-leave', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'homePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'aboutPage' } },
  { path: 'open-close', component: OpenCloseComponent, data: { animation: 'openClosePage' } },
  { path: 'enter-leave', component: HeroListEnterLeavePageComponent, data: { animation: 'enterLeavePage' } },
  { path: 'status', component: StatusSliderComponent, data: { animation: 'statusPage' } },
  { path: 'toggle', component: ToggleAnimationsPageComponent, data: { animation: 'togglePage' } },
  { path: 'auto', component: HeroListAutoPageComponent, data: { animation: 'autoPage' } },
  { path: 'heroes', component: HeroListPageComponent, data: { animation: 'filterPage' } },
  { path: 'hero-groups', component: HeroListGroupPageComponent, data: { animation: 'heroGroupPage' } },
  { path: 'insert-remove', component: InsertRemoveComponent, data: { animation: 'insertRemovePage' } },
  { path: 'querying', component: QueryingComponent, data: { animation: 'queryingPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
