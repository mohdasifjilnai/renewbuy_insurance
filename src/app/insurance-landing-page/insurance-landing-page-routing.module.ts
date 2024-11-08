import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceLandingPageComponent } from './insurance-landing-page.component';

const routes: Routes = [{
  path: '',
  component: InsuranceLandingPageComponent,
  children: [
    // Add more routes here
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceLandingPageRoutingModule { }
