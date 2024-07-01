import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AliasingComponent } from './aliasing/aliasing.component';
import { InTheMetadataComponent } from './in-the-metadata/in-the-metadata.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ItemDetailMetadataComponent } from './item-detail-metadata/item-detail-metadata.component';
import { ItemOutputComponent } from './item-output/item-output.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    AliasingComponent,
    InTheMetadataComponent,
    InputOutputComponent,
    ItemDetailMetadataComponent,
    ItemOutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
