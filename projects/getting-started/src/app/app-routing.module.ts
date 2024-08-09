import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'one', component: OneComponent, data: { animationState: 'one' } },
      { path: 'two', component: TwoComponent, data: { animationState: 'two' } },
      { path: 'three', component: ThreeComponent, data: { animationState: 'three' } },
      { path: '**', redirectTo: 'one' }
    ]
  },
  { path: '**', redirectTo: 'one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
