import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemAlertsComponent } from './item-alerts/item-alerts.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CartComponent } from './cart/cart.component';
import { DataComponent } from './data/data.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { ApiObjectCallComponent } from './api-object-call/api-object-call.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ItemListComponent,
    AppBarComponent,
    ItemDetailsComponent,
    ItemAlertsComponent,
    ShippingComponent,
    CartComponent,
    DataComponent,
    ApiCallComponent,
    ApiObjectCallComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
