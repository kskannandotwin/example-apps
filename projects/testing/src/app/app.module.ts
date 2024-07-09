import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BannerComponent } from './banner/banner.component';
// import { BannerExternalComponent } from './banner/banner-external/banner-external.component';
// import { BannerInitialComponent } from './banner/banner-initial/banner-initial.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SharedModule } from 'projects/shared/src/public-api';
import { HeroService } from './model/hero.service';
import { TwainService } from './twain/twain.service';
import { UserService } from './model/user.service';
import { TwainComponent } from './twain/twain/twain.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    // BannerExternalComponent,
    // BannerInitialComponent,
    WelcomeComponent,
    AboutComponent,
    TwainComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    HeroService,
    TwainService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
