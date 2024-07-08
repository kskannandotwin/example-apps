import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnerHtmlBindingComponent } from './inner-html-binding/inner-html-binding.component';
import { BypassSecurityComponent } from './bypass-security/bypass-security.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerHtmlBindingComponent,
    BypassSecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
