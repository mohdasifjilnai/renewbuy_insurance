import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceLandingPageRoutingModule } from './insurance-landing-page-routing.module';
import { InsuranceLandingPageComponent } from './insurance-landing-page.component';

import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { AdvisorConnectComponent } from './advisor-connect/advisor-connect.component';
import { ClaimFileComponent } from './claim-file/claim-file.component';
import { CashlessGaragesComponent } from './cashless-garages/cashless-garages.component';
import { CommanModuleModule } from '../comman-module/comman-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistraionNumberDirective } from '../utilis/directives/registraion-number.directive';
import { AcceptOnlyDigitDirective } from '../utilis/directives/accept-only-digit.directive';

@NgModule({
  declarations: [InsuranceLandingPageComponent, CarInsuranceComponent, AdvisorConnectComponent, ClaimFileComponent, CashlessGaragesComponent, RegistraionNumberDirective],
  imports: [CommonModule,FormsModule,ReactiveFormsModule, CommanModuleModule,InsuranceLandingPageRoutingModule,AcceptOnlyDigitDirective],
})
export class InsuranceLandingPageModule {}
