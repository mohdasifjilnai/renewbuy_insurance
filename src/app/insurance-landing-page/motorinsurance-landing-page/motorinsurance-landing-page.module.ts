import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MotorinsuranceLandingPageRoutingModule } from "./motorinsurance-landing-page-routing.module";
import { MotorinsuranceLandingPageComponent } from "./motorinsurance-landing-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommanModuleModule } from "../../comman-module/comman-module.module";
// import { InclusionsComponent } from './inclusions/inclusions.component';
import { ExclusionsComponent } from "./exclusions/exclusions.component";
import { SelectRightPolicyComponent } from "./select-right-policy/select-right-policy.component";
import { TypeOfPolicyComponent } from "./type-of-policy/type-of-policy.component";
// import { FaqMotorComponent } from './faq-motor/faq-motor.component';

@NgModule({
  declarations: [
    MotorinsuranceLandingPageComponent,
    ExclusionsComponent,
    SelectRightPolicyComponent,
    TypeOfPolicyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommanModuleModule,
    MotorinsuranceLandingPageRoutingModule,
  ],
})
export class MotorinsuranceLandingPageModule {}
