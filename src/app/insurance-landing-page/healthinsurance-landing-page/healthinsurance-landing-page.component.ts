import { Component } from '@angular/core';

@Component({
  selector: 'app-healthinsurance-landing-page',
  templateUrl: './healthinsurance-landing-page.component.html',
  styleUrl: './healthinsurance-landing-page.component.scss',
})
export class HealthinsuranceLandingPageComponent {
  addOnspageData = [{
    pageHeader:`What is Health Insurance?`,
    pageDescriptions: `<p class="decsription-text">
      Health insurance is also known as medical insurance. A health insurance plan is a contract between the insurance company and the policyholder in which the health insurance company provides you with financial coverage against medical expenses incurred due to accident, critical illness, minor or major injuries, etc.
    </p>
    <p class="decsription-text">
      Policyholders need to pay a pre-determined amount (health insurance premium) to avail the coverage <span class="link-text">benefits of a health insurance</span> policy. A health insurance plan offers various coverage benefits such as pre and post-hospitalization, home hospitalization, coverage for daycare treatment, annual medical check-up, etc.
    </p>` 
  }]
}
