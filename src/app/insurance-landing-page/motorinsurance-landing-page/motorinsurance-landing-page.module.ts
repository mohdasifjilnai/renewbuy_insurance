import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorinsuranceLandingPageRoutingModule } from './motorinsurance-landing-page-routing.module';
import { MotorinsuranceLandingPageComponent } from './motorinsurance-landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommanModuleModule } from '../../comman-module/comman-module.module';
import { MotorCarInsuranceComponent } from './motor-car-insurance/motor-car-insurance.component';
import { AddOnsInuranceComponent } from './add-ons-inurance/add-ons-inurance.component';
import { InclusionsComponent } from './inclusions/inclusions.component';
import { ExclusionsComponent } from './exclusions/exclusions.component';
import { SelectRightPolicyComponent } from './select-right-policy/select-right-policy.component';
import { TypeOfPolicyComponent } from './type-of-policy/type-of-policy.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { FaqMotorComponent } from './faq-motor/faq-motor.component';

@NgModule({
  declarations: [
    MotorinsuranceLandingPageComponent,
    AddOnsInuranceComponent,
    InclusionsComponent,
    ExclusionsComponent,
    SelectRightPolicyComponent,
    TypeOfPolicyComponent,
    NoticeBoardComponent,
    FaqMotorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule, CommanModuleModule,
    MotorinsuranceLandingPageRoutingModule
  ]
})
export class MotorinsuranceLandingPageModule {}
