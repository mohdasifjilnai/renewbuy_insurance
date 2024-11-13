import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-choose-best-health-insurance",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./choose-best-health-insurance.component.html",
  styleUrl: "./choose-best-health-insurance.component.scss",
})
export class ChooseBestHealthInsuranceComponent {
  bestBenifitResCard = [
    {
      bestCoverageHead : 'Wider Coverage at Low Premiums',
      bestCoverageDescription : 'Explore our cost-effective insurance plans with extensive coverage and affordable premiums, offering robust protection tailored to your needs for peace of mind & financial security.',
      image : './rb_assets/assets/images/wider-cov.svg',
    },
    {
      bestCoverageHead : 'Network Hospitals',
      bestCoverageDescription : 'Access a broad hospital network with our cost-effective plans, offering comprehensive coverage & financial security without compromising quality.',
      image : './rb_assets/assets/images/network-hospital.svg',
    },
    {
      bestCoverageHead : 'Customer Care Support',
      bestCoverageDescription : 'Get reliable customer care with our affordable plans, providing comprehensive assistance and convenience within your budget.',
      image : './rb_assets/assets/images/customer-care.svg',
    },
    {
      bestCoverageHead : 'Online Services',
      bestCoverageDescription : 'Experience extensive online services with our affordable plans, offering comprehensive coverage and convenience without exceeding your budget.',
      image : './rb_assets/assets/images/online-service.svg',
    },
  ];
}
