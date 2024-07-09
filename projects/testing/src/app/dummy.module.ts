// These unused NgModules keep the Angular Language Service happy.
// The AppModule registers the final versions of these components
import { NgModule } from '@angular/core';

import { AppComponent as app_initial } from './app-initial.component';
@NgModule({ declarations: [ app_initial ] })
export class AppModuleInitial {}

import { BannerInitialComponent as bc_initial } from './../app/banner/banner-initial/banner-initial.component';
@NgModule({ declarations: [ bc_initial ] })
export class BannerModuleInitial {}

import { BannerExternalComponent as bc_external } from './../app/banner/banner-external/banner-external.component';
@NgModule({ declarations: [ bc_external ] })
export class BannerModuleExternal {}