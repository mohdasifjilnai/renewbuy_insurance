import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainInuranceComponent } from "./main-inurance.component";

const routes: Routes = [
  {
    path: "",
    component: MainInuranceComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import(
            "../../app/insurance-landing-page/insurance-landing-page.module"
          ).then((m) => m.InsuranceLandingPageModule),
      },
      {
        path: "motor-insurance",
        loadChildren: () =>
          import(
            "../../app/insurance-landing-page/motorinsurance-landing-page/motorinsurance-landing-page.module"
          ).then((m) => m.MotorinsuranceLandingPageModule),
      },
      {
        path: "health-insurance",
        loadChildren: () =>
          import(
            "../../app/insurance-landing-page/healthinsurance-landing-page/healthinsurance-landing-page.module"
          ).then((m) => m.HealthinsuranceLandingPageModule),
      },
      {
        path: "privacy-policy",
        loadChildren: () =>
          import(
            "../../app/insurance-landing-page/privacy-policy/privacy-policy.module"
          ).then((m) => m.PrivacyPolicyModule),
      },
      {
        path: "terms-conditions",
        loadChildren: () =>
          import(
            "../../app/insurance-landing-page/terms-conditions/terms-conditions.module"
          ).then((m) => m.TermsConditionsModule),
      },
      {
        path: "disclaimer",
        loadChildren: () =>
          import(
            "../../app/insurance-landing-page/disclaimer/disclaimer.module"
          ).then((m) => m.DisclaimerModule),
      },
      {
        path: "grievance-redressal",
        loadChildren: () =>
          import(
            "../../app/insurance-landing-page/grievance-redressal/grievance-redressal.module"
          ).then((m) => m.GrievanceRedressalModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainInuranceRoutingModule {}
