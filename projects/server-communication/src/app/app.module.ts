import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ConfigComponent } from './config/config.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { UploaderComponent } from './uploader/uploader.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { AuthService } from './auth.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ConfigComponent,
    HeroesComponent,
    PackageSearchComponent,
    UploaderComponent,
    DownloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false // return entity after PUT/update
    }
    ),
    AppRoutingModule
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
