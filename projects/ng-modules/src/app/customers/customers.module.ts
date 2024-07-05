import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersService } from './customers.service';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersDetailComponent
  ],
  imports: [    
    SharedModule,
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [
    CustomersService
  ]

})
export class CustomersModule { }
