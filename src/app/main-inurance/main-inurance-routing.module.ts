import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInuranceComponent } from './main-inurance.component';


const routes: Routes = [
  {
    path: '',
    component: MainInuranceComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../../app/insurance-landing-page/insurance-landing-page.module'
          ).then((m) => m.InsuranceLandingPageModule),
      },
      {
        path:'motorinsurance',
        loadChildren: () =>
          import(
            '../../app/insurance-landing-page/motorinsurance-landing-page/motorinsurance-landing-page.module'
          ).then((m) => m.MotorinsuranceLandingPageModule)
        
      },
      {
        path:'healthinsurance',
        loadChildren: () =>
          import(
            '../../app/insurance-landing-page/healthinsurance-landing-page/healthinsurance-landing-page.module'
          ).then((m) => m.HealthinsuranceLandingPageModule)
        
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainInuranceRoutingModule { }
