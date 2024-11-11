import { Component } from '@angular/core';

@Component({
  selector: 'app-type-of-policy',
  templateUrl: './type-of-policy.component.html',
  styleUrl: './type-of-policy.component.scss',
})
export class TypeOfPolicyComponent {
  insuranceCardData = [
    {
      imageUrl:
        '../../../../rb_assets/assets/insurance/motor-insurance-car.svg',
      altText: 'Car Insurance',
      title: 'Car Insurance',
      description: ` is mandatory and helps ease the burden of accidents. It covers losses, 
                  damage, and third-party harm. To find the best fit, compare various policies 
                  and ensure comprehensive, tailored coverage for your needs.`,
      linkText: 'Car insurance',
      linkClass: 'active-text text-decoration-none',
    },
    {
      imageUrl:
        '../../../../rb_assets/assets/insurance/two-wheeler-insurance.svg',
      altText: 'Two Wheeler Insurance',
      title: 'Two Wheeler Insurance',
      description: ` shields against damage or theft of motorcycles and scooters and includes coverage for third-party losses, injuries, or fatalities from accidents. It’s prudent to compare several policies before making a decision, like with car insurance.`,
      linkText: 'Two Wheeler Insurance',
      linkClass: 'active-text text-decoration-none',
    },
    {
      imageUrl:
        '../../../../rb_assets/assets/insurance/commercial-vehicle.svg',
      altText: 'Commercial Vehicle Insurance',
      title: 'Commercial Vehicle Insurance',
      description: ` is mandatory and helps ease the burden of accidents. It covers losses, 
                  damage, and third-party harm. To find the best fit, compare various policies 
                  and ensure comprehensive, tailored coverage for your needs.`,
      linkText: 'Commercial Vehicle Insurance',
      linkClass: 'active-text text-decoration-none',
    },
  ];
}
