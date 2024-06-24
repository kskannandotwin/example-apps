import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ExampleZippyComponent } from './example-zippy/example-zippy.component';
import { ZippyToggleDirective } from './zippy-toggle.directive';
import { ZippyContentDirective } from './zippy-content.directive';
import { ZippyNgprojectasComponent } from './zippy-ngprojectas/zippy-ngprojectas.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ExampleZippyComponent,
    ZippyToggleDirective,
    ZippyContentDirective,
    ZippyNgprojectasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
