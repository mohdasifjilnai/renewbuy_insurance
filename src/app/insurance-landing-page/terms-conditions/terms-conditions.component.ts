import { Component } from "@angular/core";

@Component({
  selector: "app-terms-conditions",
  templateUrl: "./terms-conditions.component.html",
  styleUrl: "./terms-conditions.component.scss",
})
export class TermsConditionsComponent {
  termsAndConditionsData = {
    pageHeading: "Terms and Conditions",
    pageDescription: `Everything in life now comes with an asterisk. This means that there are some conditions to the contract between us. We try and keep the surprise down to the minimum. In this case about a million words. But this has to be done as Insurance is important and what it offers you must never have grey areas.`,
    pageImageSrc:
      "../../../../rb_assets/assets/images/terms-conditions-hero-img.svg",
  };
  limitationList = [
    "The use of our Resources will meet your needs or requirements.",
    "The use of our Resources will be uninterrupted, timely, secure or free from errors.",
    "The information obtained by using our Resources will be accurate or reliable, and",
    "Any defects in the operation or functionality of any Resources we provide will be repaired or corrected.",
  ];
  emailAddress = "support@renewbuy.com";

  redirection() {
    window.open("https://www.renewbuyinsurance.com/privacy-policy", "_bank");
  }
}
