import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, PLATFORM_ID } from "@angular/core";

@Component({
  selector: "app-disclaimer",
  templateUrl: "./disclaimer.component.html",
  styleUrl: "./disclaimer.component.scss",
})
export class DisclaimerComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  redirectToRenewBuyInsurance() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = "https://www.renewbuyinsurance.com/";
    }
  }
}
