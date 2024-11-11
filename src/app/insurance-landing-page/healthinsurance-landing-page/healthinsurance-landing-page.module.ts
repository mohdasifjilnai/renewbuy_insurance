import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthinsuranceLandingPageRoutingModule } from './healthinsurance-landing-page-routing.module';
import { HealthinsuranceLandingPageComponent } from './healthinsurance-landing-page.component';
import { CommanModuleModule } from '../../comman-module/comman-module.module';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';
import { DataComparisonComponent } from './data-comparison/data-comparison.component';
import { ChooseBestHealthInsuranceComponent } from './choose-best-health-insurance/choose-best-health-insurance.component';
import { NotSurePlansComponent } from './not-sure-plans/not-sure-plans.component';
import { SomeMythsComponent } from './some-myths/some-myths.component';
import { ReduceInsurancePremiumComponent } from './reduce-insurance-premium/reduce-insurance-premium.component';
import { CashlessHospitalsComponent } from './cashless-hospitals/cashless-hospitals.component';


@NgModule({
  declarations: [
    HealthinsuranceLandingPageComponent,
    CashlessHospitalsComponent,
  ],
  imports: [
    CommonModule,
    HealthinsuranceLandingPageRoutingModule,
    CommanModuleModule,
    InsuranceCompaniesComponent,
    DataComparisonComponent,
    ChooseBestHealthInsuranceComponent,
    NotSurePlansComponent,
    SomeMythsComponent,
    ReduceInsurancePremiumComponent
  ]
})
export class HealthinsuranceLandingPageModule { }
