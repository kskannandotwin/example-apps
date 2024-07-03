import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, ChildComponent, InspectorComponent],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }
