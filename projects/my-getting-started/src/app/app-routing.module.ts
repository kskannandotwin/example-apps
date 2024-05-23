import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';

const routes: Routes = [
  { path: '', component: MobileListComponent },
  { path: 'mobiles/:mobileId', component: MobileDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
