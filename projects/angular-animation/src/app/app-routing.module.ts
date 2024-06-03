import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page/hero-list-enter-leave-page.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';

const routes: Routes = [
  { path: '', redirectTo: '/enter-leave', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent, data: { animation: 'homePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'aboutPage' } },
  { path: 'open-close', component: OpenCloseComponent, data: { animation: 'openClosePage' } },
  { path: 'enter-leave',  component: HeroListEnterLeavePageComponent, data: { animation: 'enterLeavePage' } },
  { path: 'status', component: StatusSliderComponent, data: { animation: 'statusPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
