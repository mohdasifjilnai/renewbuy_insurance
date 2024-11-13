import { Component } from "@angular/core";

@Component({
  selector: "app-type-of-policy",
  templateUrl: "./type-of-policy.component.html",
  styleUrl: "./type-of-policy.component.scss",
})
export class TypeOfPolicyComponent {
  insuranceCardData = [
    {
      imageUrl:
        "../../../../rb_assets/assets/insurance/motor-insurance-car.svg",
      altText: "Car Insurance",
      title: "Car Insurance",
      description: `Protect your four-wheeler with coverage against accidents, theft, and damages. Choose from third-party liability or comprehensive plans to keep your car secure on the road.`,
      linkText: "",
      linkClass: "active-text text-decoration-none",
    },
    {
      imageUrl:
        "../../../../rb_assets/assets/insurance/two-wheeler-insurance.svg",
      altText: "Two-Wheeler Insurance",
      title: "Two Wheeler Insurance",
      description: `Whether it’s a scooter or a bike, safeguard your two-wheeler with insurance that covers damages, theft, and third-party liabilities and enjoy hassle-free rides.`,
      linkText: "",
      linkClass: "active-text text-decoration-none",
    },
    {
      imageUrl: "../../../../rb_assets/assets/insurance/commercial-vehicle.svg",
      altText: "Commercial Vehicle Insurance",
      title: "Commercial Vehicle Insurance",
      description: `Keep your business moving with insurance designed for trucks, taxis, and other commercial vehicles. Get coverage for accidents, cargo damage, and third-party claims.`,
      linkText: "",
      linkClass: "active-text text-decoration-none",
    },
  ];
}
