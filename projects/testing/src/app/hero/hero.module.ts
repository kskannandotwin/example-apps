import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HeroRoutingModule, routedComponents } from './hero-routing.module';

@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }
