import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemDirective } from './item.directive';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   { path: '', component: ProductListComponent },
    //   { path: 'products/:productId', component: ProductDetailsComponent },
    //   { path: 'cart', component: CartComponent },
    //   { path: 'shipping', component: ShippingComponent },
    // ])
  ],
  declarations: [
    AppComponent,
    ItemDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
