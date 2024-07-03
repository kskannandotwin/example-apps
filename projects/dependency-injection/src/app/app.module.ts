import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroTaxReturnComponent } from './hero-tax-return/hero-tax-return.component';
import { VillainsListComponent } from './villains-list/villains-list.component';
import { carComponents } from './car.components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, carComponents, HeroesListComponent, HeroTaxReturnComponent, VillainsListComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
