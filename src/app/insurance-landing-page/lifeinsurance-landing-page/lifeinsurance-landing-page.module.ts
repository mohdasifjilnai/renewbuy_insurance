import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeinsuranceLandingPageRoutingModule } from './lifeinsurance-landing-page-routing.module';
import { LifeinsuranceLandingPageComponent } from './lifeinsurance-landing-page.component';
import { CommanModuleModule } from '../../comman-module/comman-module.module';


@NgModule({
  declarations: [
    LifeinsuranceLandingPageComponent
  ],
  imports: [
    CommonModule,
    LifeinsuranceLandingPageRoutingModule,
    CommanModuleModule
  ]
})
export class LifeinsuranceLandingPageModule { }
