import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes =  [
  { path: 'dashboard',  component: DashboardComponent },
];

@NgModule({  
  declarations: [
    DashboardComponent,
    DashboardHeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
