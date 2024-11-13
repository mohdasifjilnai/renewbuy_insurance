import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-insurance-companies",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./insurance-companies.component.html",
  styleUrl: "./insurance-companies.component.scss",
})
export class InsuranceCompaniesComponent {
  insuranceCompanies = [
    {
      name: "Care Health Insurance",
      claimSettlementRatio: "100%",
      startYear: "2012",
      features: [
        "In-house Claim Settlement",
        "158 branches across PAN India",
        "Cashless claim approval within 2 hr",
      ],
      image: "./rb_assets/assets/insurance/care-comapny.svg",
    },
    {
      name: "Niva Bupa Health Insurance",
      claimSettlementRatio: "100%",
      startYear: "2008",
      features: [
        "Online Reimbursement Process",
        "24x7 Customer Care Assistance",
        "Cashless claim within 30 mins",
      ],
      image: "./rb_assets/assets/insurance/niva.svg",
    },
    {
      name: "ManipalCigna Health Insurance",
      claimSettlementRatio: "99.96%",
      startYear: "2014",
      features: [
        "77 branches across India",
        "18000+ OPD cashless network",
        "8,500+ Network Hospitals",
      ],
      image: "./rb_assets/assets/insurance/manipal-cigna.svg",
    },
    {
      name: "Star Health",
      claimSettlementRatio: "99.21%",
      startYear: "2006",
      features: [
        "In-house Claim Settlement",
        "640 branch offices across PAN India",
        "No Copay",
      ],
      image: "./rb_assets/assets/insurance/star-health.svg",
    },
    {
      name: "Aditya Birla",
      claimSettlementRatio: "99.01%",
      startYear: "",
      features: [
        "2.5 Cr lives insured",
        "Offers Wellness Coaching",
        "Offers Chronic Management Prog.",
        "More than 99% of claims settled",
      ],
      image: "./rb_assets/assets/insurance/aditya-birla.svg",
    },
    {
      name: "Reliance General Insurance",
      claimSettlementRatio: "98.75%",
      startYear: "",
      features: [
        "24x7 Customer support",
        "10,000+ Network Hospitals",
        "More than 3 Cr policy holders",
        "Paperless and cashless claims",
      ],
      image: "./rb_assets/assets/insurance/reliance.svg",
    },
    {
      name: "HDFC Ergo",
      claimSettlementRatio: "98.59%",
      startYear: "",
      features: [
        "In-house claim settlement",
        "Free renewal health checkup",
        "640+ branches across PAN India",
        "Cashless claim approval in 20 mins",
      ],
      image: "./rb_assets/assets/insurance/hdfc.svg",
    },
    {
      name: "Zuno Health Insurance",
      claimSettlementRatio: "98.54%",
      startYear: "2017",
      features: [
        "24x7 Customer Support",
        "10,000+ Network Hospitals",
        "Easy cashless claims process",
      ],
      image: "./rb_assets/assets/insurance/zuno.svg",
    },
    {
      name: "ICICI Lombard Health Insurance",
      claimSettlementRatio: "98.53%",
      startYear: "2001",
      features: [
        "24x7 Customer Care Support",
        "Rewards for every claim-free year",
        "270+ branches across the country",
      ],
      image: "./rb_assets/assets/insurance/icici.svg",
    },
    {
      name: "Acko Health Insurance",
      claimSettlementRatio: "97.68%",
      startYear: "2016",
      features: [
        "14,300+ network hospitals",
        "Fastest claim settled in 12 min",
        "Mobile app to manage the policy",
      ],
      image: "./rb_assets/assets/insurance/acko.svg",
    },
  ];

  redirect(link: any): void {
    if (link != null) {
      window.open(link, "_blank");
    }
  }
}
