import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BackendService } from './backend.service';
import { HeroService } from './hero.service';
import { LoggerService } from './logger.service';
import { SalesTaxComponent } from './sales-tax/sales-tax.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    SalesTaxComponent
  ],
  providers: [
    BackendService,
    HeroService,
    LoggerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
