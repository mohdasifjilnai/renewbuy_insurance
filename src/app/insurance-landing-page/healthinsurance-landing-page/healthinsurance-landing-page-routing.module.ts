import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthinsuranceLandingPageComponent } from './healthinsurance-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: HealthinsuranceLandingPageComponent,
    children: [
      // Add more routes here
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthinsuranceLandingPageRoutingModule { }
