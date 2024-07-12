import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { DataComponent } from './data/data.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { ApiObjectCallComponent } from './api-object-call/api-object-call.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'data', component: DataComponent },
  { path: 'api', component: ApiCallComponent },
  { path: 'api-object', component: ApiObjectCallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
