import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive/hero-form-reactive.component';
import { HeroFormReactiveTwoComponent } from './reactive/hero-form-reactive-two/hero-form-reactive-two.component';
import { HeroFormTemplateComponent } from './template/hero-form-template/hero-form-template.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormReactiveComponent,
    HeroFormReactiveTwoComponent,
    HeroFormTemplateComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
