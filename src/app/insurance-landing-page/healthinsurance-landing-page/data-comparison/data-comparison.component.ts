import { CommonModule } from '@angular/common';
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
  companiesData = [
    {
      insurer: 'Care Health Insurance',
      claimSettlementRatio: '97.68%',
      incurredClaimRatio: '83.88%',
      solvencyRatio: '4.26%',
      grossDirectPremium: '736.00',
      networkHospitals: '14,300+'
    },
    {
      insurer: 'Bajaj Allianz General Insurance',
      claimSettlementRatio: '93.54%',
      incurredClaimRatio: '74.27%',
      solvencyRatio: '3.68%',
      grossDirectPremium: '3372.78',
      networkHospitals: '18,400+'
    },
    {
      insurer: 'Cholamandalam MS General Insurance',
      claimSettlementRatio: '93.63%',
      incurredClaimRatio: '67.88%',
      solvencyRatio: '2.07%',
      grossDirectPremium: '893.28',
      networkHospitals: '11,000+'
    },
    {
      insurer: 'Future Generali India Insurance',
      claimSettlementRatio: '94.98%',
      incurredClaimRatio: '74.18%',
      solvencyRatio: '1.86%',
      grossDirectPremium: '879.61',
      networkHospitals: '8430+'
    },
    {
      insurer: 'Go Digit General Insurance',
      claimSettlementRatio: '96.83%',
      incurredClaimRatio: '71.87%',
      solvencyRatio: '1.96%',
      grossDirectPremium: '933.33',
      networkHospitals: '16,400+'
    }
  ];

  sort() {
    this.companiesData.sort((a, b) => {
      const ratioA = parseFloat(a.claimSettlementRatio.replace('%', ''));
      const ratioB = parseFloat(b.claimSettlementRatio.replace('%', ''));
      return this.isAscending ? ratioA - ratioB : ratioB - ratioA;
    });
    this.isAscending = !this.isAscending;
  }
  
}
