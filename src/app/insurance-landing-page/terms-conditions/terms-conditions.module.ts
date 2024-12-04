import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';
import { TermsConditionsComponent } from './terms-conditions.component';
import { TermsConditionHeroComponent } from './terms-condition-hero/terms-condition-hero.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { CommanModuleModule } from '../../comman-module/comman-module.module';


@NgModule({
  declarations: [
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    TermsConditionsRoutingModule,
    CommanModuleModule,
    ServiceProviderComponent,
  ]
})
export class TermsConditionsModule { }
