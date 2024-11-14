import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceLandingPageComponent } from './insurance-landing-page.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';

const routes: Routes = [
  {
    path: '',
    component: InsuranceLandingPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceLandingPageRoutingModule {}
