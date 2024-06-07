import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompWithHostBindingComponent } from './comp-with-host-binding/comp-with-host-binding.component';
import { SingleAndMultipleStyleBindingComponent } from './single-and-multiple-style-binding/single-and-multiple-style-binding.component';
import { MyInputWithAttributeDecoratorComponent } from './my-input-with-attribute-decorator/my-input-with-attribute-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    CompWithHostBindingComponent,
    SingleAndMultipleStyleBindingComponent,
    MyInputWithAttributeDecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
