import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss',
})
export class TermsConditionsComponent {
  termsAndConditionsData = {
    pageHeading: 'Terms and Conditions',
    pageDescription: `Everything in life now comes with an asterisk. This means that there are some conditions to the contract between us. We try and keep the surprise down to the minimum. In this case about a million words. But this has to be done as Insurance is important and what it offers you must never have grey areas.`,
    pageImageSrc:
      '../../../../rb_assets/assets/images/terms-conditions-hero-img.svg',
  };
}
