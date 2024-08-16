import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PeppersComponent } from './peppers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PeppersComponent }
];


@NgModule({
  declarations: [
    PeppersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class PeppersModule { }
