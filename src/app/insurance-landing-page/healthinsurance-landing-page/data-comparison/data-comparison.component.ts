import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-comparison.component.html',
  styleUrl: './data-comparison.component.scss'
})
export class DataComparisonComponent {

  isAscending = true;
  isExpanded = false;

  companiesData = 
  [
    {
      "company": "Acko General Insurance",
      "claimSettlementRatio": "97.68%",
      "incurredClaimRatio": "83.88%",
      "solvencyRatio": "4.26%",
      "grossDirectPremium": 736.00,
      "networkHospitals": "14,300+"
    },
    {
      "company": "Bajaj Allianz General Insurance",
      "claimSettlementRatio": "93.54%",
      "incurredClaimRatio": "74.27%",
      "solvencyRatio": "3.68%",
      "grossDirectPremium": 3372.78,
      "networkHospitals": "18,400+"
    },
    {
      "company": "Cholamandalam MS General Insurance",
      "claimSettlementRatio": "93.63%",
      "incurredClaimRatio": "67.88%",
      "solvencyRatio": "2.07%",
      "grossDirectPremium": 893.28,
      "networkHospitals": "11,000+"
    },
    {
      "company": "Future Generali India Insurance",
      "claimSettlementRatio": "94.98%",
      "incurredClaimRatio": "79.18%",
      "solvencyRatio": "1.86%",
      "grossDirectPremium": 879.61,
      "networkHospitals": "8,430+"
    },
    {
      "company": "Go Digit General Insurance",
      "claimSettlementRatio": "96.83%",
      "incurredClaimRatio": "71.87%",
      "solvencyRatio": "1.96%",
      "grossDirectPremium": 933.33,
      "networkHospitals": "16,400+"
    },
    {
      "company": "HDFC ERGO General Insurance",
      "claimSettlementRatio": "98.59%",
      "incurredClaimRatio": "79.04%",
      "solvencyRatio": "1.75%",
      "grossDirectPremium": 5716.43,
      "networkHospitals": "13,000+"
    },
    {
      "company": "ICICI Lombard General Insurance",
      "claimSettlementRatio": "98.53%",
      "incurredClaimRatio": "77.33%",
      "solvencyRatio": "2.51%",
      "grossDirectPremium": 5592.29,
      "networkHospitals": "9,500+"
    },
    {
      "company": "IFFCO Tokio General Insurance",
      "claimSettlementRatio": "90.65%",
      "incurredClaimRatio": "111.18%",
      "solvencyRatio": "1.73%",
      "grossDirectPremium": 2169.52,
      "networkHospitals": "7,000+"
    },
    {
      "company": "Kotak Mahindra General Insurance",
      "claimSettlementRatio": "97.61%",
      "incurredClaimRatio": "56.01%",
      "solvencyRatio": "2.95%",
      "grossDirectPremium": 483.37,
      "networkHospitals": "7,700+"
    },
    {
      "company": "Liberty General Insurance",
      "claimSettlementRatio": "97.46%",
      "incurredClaimRatio": "74.17%",
      "solvencyRatio": "2.34%",
      "grossDirectPremium": 313.11,
      "networkHospitals": "5,000+"
    },
    {
      "company": "Magma General Insurance",
      "claimSettlementRatio": "94.72%",
      "incurredClaimRatio": "72.10%",
      "solvencyRatio": "2.19%",
      "grossDirectPremium": 251.99,
      "networkHospitals": "7,200+"
    },
    {
      "company": "Novi General Insurance",
      "claimSettlementRatio": "95.13%",
      "incurredClaimRatio": "59.28%",
      "solvencyRatio": "2.69%",
      "grossDirectPremium": 43.55,
      "networkHospitals": "12,000+"
    },
    {
      "company": "Raheja General Insurance",
      "claimSettlementRatio": "97.30%",
      "incurredClaimRatio": "138.67%",
      "solvencyRatio": "1.96%",
      "grossDirectPremium": 14.56,
      "networkHospitals": "5,000+"
    },
    {
      "company": "Royal Sundaram General Insurance",
      "claimSettlementRatio": "95.95%",
      "incurredClaimRatio": "83.36%",
      "solvencyRatio": "2.17%",
      "grossDirectPremium": 475.98,
      "networkHospitals": "10,000+"
    },
    {
      "company": "SBI General Insurance",
      "claimSettlementRatio": "96.47%",
      "incurredClaimRatio": "73.92%",
      "solvencyRatio": "1.86%",
      "grossDirectPremium": 3293.86,
      "networkHospitals": "16,625+"
    },
    {
      "company": "Tata General",
      "claimSettlementRatio": "95.46%",
      "incurredClaimRatio": "78.33%",
      "solvencyRatio": "1.97%",
      "grossDirectPremium": 2770.21,
      "networkHospitals": "10,000+"
    },
    {
      "company": "Universal Sompo General Insurance",
      "claimSettlementRatio": "91.58%",
      "incurredClaimRatio": "82.84%",
      "solvencyRatio": "1.73%",
      "grossDirectPremium": 488.88,
      "networkHospitals": "11,800+"
    },
    {
      "company": "Zuno General Insurance",
      "claimSettlementRatio": "98.54%",
      "incurredClaimRatio": "89.59%",
      "solvencyRatio": "1.72%",
      "grossDirectPremium": 197.37,
      "networkHospitals": "10,000+"
    },
    {
      "company": "National Insurance",
      "claimSettlementRatio": "91.31%",
      "incurredClaimRatio": "102.35%",
      "solvencyRatio": "0.16%",
      "grossDirectPremium": 7403.16,
      "networkHospitals": "2,055+"
    },
    {
      "company": "The New India Assurance",
      "claimSettlementRatio": "90.73%",
      "incurredClaimRatio": "103.33%",
      "solvencyRatio": "1.82%",
      "grossDirectPremium": 17338.57,
      "networkHospitals": "3,000+"
    },
    {
      "company": "The Oriental Insurance",
      "claimSettlementRatio": "91.62%",
      "incurredClaimRatio": "130.09%",
      "solvencyRatio": "-0.63%",
      "grossDirectPremium": 8747.80,
      "networkHospitals": "4,300+"
    },
    {
      "company": "United India Insurance",
      "claimSettlementRatio": "91.10%",
      "incurredClaimRatio": "89.57%",
      "solvencyRatio": "0.15%",
      "grossDirectPremium": 7682.68,
      "networkHospitals": "14,000+"
    },
    {
      "company": "Aditya Birla Health Insurance",
      "claimSettlementRatio": "99.01%",
      "incurredClaimRatio": "64.68%",
      "solvencyRatio": "2.37%",
      "grossDirectPremium": 2717.03,
      "networkHospitals": "11,000+"
    },
    {
      "company": "Care Health Insurance",
      "claimSettlementRatio": "100%",
      "incurredClaimRatio": "53.82%",
      "solvencyRatio": "1.83%",
      "grossDirectPremium": 5141.53,
      "networkHospitals": "24,800+"
    },
    {
      "company": "ManipalCigna Health Insurance",
      "claimSettlementRatio": "99.96%",
      "incurredClaimRatio": "64.66%",
      "solvencyRatio": "1.57%",
      "grossDirectPremium": 1359.79,
      "networkHospitals": "8,500+"
    },
    {
      "company": "Niva Bupa Health Insurance",
      "claimSettlementRatio": "100%",
      "incurredClaimRatio": "54.05%",
      "solvencyRatio": "1.79%",
      "grossDirectPremium": 4073.03,
      "networkHospitals": "10,000+"
    },
    {
      "company": "Reliance Health Insurance",
      "claimSettlementRatio": "98.75%",
      "incurredClaimRatio": "86.31%",
      "solvencyRatio": "1.60%",
      "grossDirectPremium": 1560.54,
      "networkHospitals": "10,000+"
    },
    {
      "company": "Star Health and Allied Insurance",
      "claimSettlementRatio": "99.21%",
      "incurredClaimRatio": "65.00%",
      "solvencyRatio": "2.03%",
      "grossDirectPremium": 12952.47,
      "networkHospitals": "14,000+"
      },    
  ];

  sortBy(column: keyof typeof this.companiesData[0]) {
    this.companiesData.sort((a, b) => {
      const getValue = (item: any) => {
        // Remove % or + and commas, then parse as float
        const value = item[column].replace(/[%+,]/g, '');
        return parseFloat(value);
      };
  
      const valueA = getValue(a);
      const valueB = getValue(b);
      
      return this.isAscending ? valueA - valueB : valueB - valueA;
    });
    this.isAscending = !this.isAscending;
  }

  expandTable() {
    this.isExpanded = !this.isExpanded;
    if(!this.isExpanded){
      this.scrollToCashlessGarages(true);
    }
  }

  annualreport(){
    window.open('https://irdai.gov.in/documents/37343/366637/%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0[…]13-da8c-c64364baf20f?version=1.0&t=1703656400415&download=true', '_blank');
  }

  scrollToCashlessGarages(event: boolean) {
      if (event) {
        if (window.innerWidth <= 768) {
          window.scrollTo({
            top: document.body.scrollHeight / 2.4,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: document.body.scrollHeight / 2.3,
            behavior: "smooth",
          });
        }
      }
  }
}
