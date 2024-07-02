import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';
import { SpyDirective } from './spy.directive';
import { SpyParentComponent } from './spy-parent/spy-parent.component';
import { FormsModule } from '@angular/forms';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { ChildComponent } from './child/child.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterComponent } from './counter/counter.component';
@NgModule({
  declarations: [
    AppComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyDirective,
    SpyParentComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    CounterParentComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
