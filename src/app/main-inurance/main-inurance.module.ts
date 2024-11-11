import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainInuranceRoutingModule } from './main-inurance-routing.module';
import { MainInuranceComponent } from './main-inurance.component';
import { CommanModuleModule } from '../comman-module/comman-module.module';


@NgModule({
  declarations: [
    MainInuranceComponent
  ],
  imports: [
    CommonModule,
    MainInuranceRoutingModule,
    CommanModuleModule
  ]
})
export class MainInuranceModule {

 }
