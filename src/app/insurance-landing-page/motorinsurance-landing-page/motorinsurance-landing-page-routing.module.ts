import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorinsuranceLandingPageComponent } from './motorinsurance-landing-page.component';

const routes: Routes = [{
  path: '',
  component: MotorinsuranceLandingPageComponent,
  children: [
    // Add more routes here
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorinsuranceLandingPageRoutingModule { }
