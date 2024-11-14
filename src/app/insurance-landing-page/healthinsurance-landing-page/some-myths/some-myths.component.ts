import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-some-myths',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './some-myths.component.html',
  styleUrl: './some-myths.component.scss'
})
export class SomeMythsComponent {
  showAllMyths = false; 


  myths = [
    {
      headCount: '01',
      headText: `Myth: "I'm young and healthy, so I don't need health
            insurance."`,
      haedDescription: `A common myth is that young, healthy individuals don’t need health
        insurance. However, accidents and unexpected illnesses can occur at any
        time. Health insurance offers financial protection for emergencies and
        covers preventive care, helping maintain good health and identify issues
        early.`,
    },
    {
      headCount: '02',
      headText: `Myth: "Health insurance is too expensive, so I can't afford
            it."`,
      haedDescription: `Health insurance premiums can be high, but being uninsured can lead to
        overwhelming costs. Government subsidies may help make coverage more
        affordable, so explore your options. Don’t overlook the financial
        protection insurance provides in emergencies.`,
    },
    {
      headCount: '03',
      headText: `Myth: Myth: “All health insurance plans are the same, so any choice
            is fine”`,
      haedDescription: `Health insurance plans differ greatly in coverage, costs, and benefits.
        Thoroughly review & compare options based on factors like network
        hospitals, prescription coverage, deductibles, and copays. Understanding
        these differences helps you choose the best plan for your healthcare
        needs & budget.`,
    },
    {
      headCount: '04',
      headText: `Myth: "Health insurance covers all medical expenses."`,
      haedDescription: `Individuals with pre-existing conditions may face challenges in
        obtaining health insurance or higher premiums. However, IRDAI prohibits
        insurers from denying coverage or charging more based on these
        conditions, ensuring access to affordable health insurance.`,
    },
    {
      headCount: '05',
      headText: `Myth: "I can only get health insurance through my employer."`,
      haedDescription: `Health insurance plans differ greatly in coverage, costs, and benefits. Thoroughly review & compare options based on factors like network hospitals, prescription coverage, deductibles, and copays. Understanding these differences helps you choose the best plan for your healthcare needs & budget.`,
    },
    {
      headCount: '06',
      headText: `Myth: "I don't need to review my health insurance plan annually."`,
      haedDescription: `Individuals with pre-existing conditions may face challenges in obtaining health insurance or higher premiums. However, IRDAI prohibits insurers from denying coverage or charging more based on these conditions, ensuring access to affordable health insurance.`,
    },
    {
      headCount: '07',
      headText: `Myth: "I can only receive medical treatment from doctors within my health insurance company network."`,
      haedDescription: `Health insurance plans differ greatly in coverage, costs, and benefits. Thoroughly review & compare options based on factors like network hospitals, prescription coverage, deductibles, and copays. Understanding these differences helps you choose the best plan for your healthcare needs & budget.`,
    },
    {
      headCount: '08',
      headText: `Myth: "I have a pre-existing disease, so I won't be able to get health insurance."`,
      haedDescription: `Individuals with pre-existing conditions may face challenges in obtaining health insurance or higher premiums. However, IRDAI prohibits insurers from denying coverage or charging more based on these conditions, ensuring access to affordable health insurance.`,
    },
  ]

  toggleView() {
    this.showAllMyths = !this.showAllMyths;
  }
}
