import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ContactRoutingModule
  ],
  providers: [ ContactService ]
})
export class ContactModule { }
