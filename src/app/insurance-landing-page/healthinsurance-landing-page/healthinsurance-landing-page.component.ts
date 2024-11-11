import { Component } from '@angular/core';

@Component({
  selector: 'app-healthinsurance-landing-page',
  templateUrl: './healthinsurance-landing-page.component.html',
  styleUrl: './healthinsurance-landing-page.component.scss',
})
export class HealthinsuranceLandingPageComponent {
  addOnspageData = [{
    pageHeader:`What is Health Insurance?`,
    pageDescriptions: `<p class="decsription-text">
      Health insurance is also known as medical insurance. A health insurance plan is a contract between the insurance company and the policyholder in which the health insurance company provides you with financial coverage against medical expenses incurred due to accident, critical illness, minor or major injuries, etc.
    </p>
    <p class="decsription-text">
      Policyholders need to pay a pre-determined amount (health insurance premium) to avail the coverage <span class="link-text">benefits of a health insurance</span> policy. A health insurance plan offers various coverage benefits such as pre and post-hospitalization, home hospitalization, coverage for daycare treatment, annual medical check-up, etc.
    </p>` 
  }]
  inclusionsData = {
    pageHeader: 'Inclusions Under Motor Vehicle Insurance',
    pageDescription: `The scope of motor insurance coverage depends on the chosen type, with
      third-party and comprehensive vehicle insurance offering different
      components.`,
    icon: '../../../../rb_assets/assets/insurance/check-icon.svg',
    backgroundImage:'../../../../rb_assets/assets/insurance/inclusions-background.svg',
    backgroundHeight:'35rem',
    marginTop:'2%',
    cards: [
      {
        cardHeader: 'Comprehensive Motor Insurance Policy',
        inclusionsData: [
          {
            title: 'Own Damage',
            text: 'The motor insurance policy will cover accidental, fire-related, natural disaster-related, or man-made disaster-related damage to the insured vehicle.',
          },
          {
            title: 'Cover for Theft',
            text: 'If your vehicle gets stolen, the motor insurance company will cover the stolen vehicle.',
          },
          {
            title: 'Third-Party Cover',
            text: 'Coverage for third-party bodily harm or property damage.',
          },
        ],
      },
      {
        cardHeader: 'Third-Party Liability Policy',
        inclusionsData: [
          {
            title: 'Dutiful Citizen',
            text: 'Regarding the obligation for having motor insurance, you will be seen as a law-abiding person, as it was made mandatory by the Govt. of India.',
          },
          {
            title: 'Third-Party Cover',
            text: 'It includes coverage for third-party injuries or property damage.',
          },
        ],
      },
    ],
  };
  exclusionsData = {
    pageHeader: 'Exclusions Under Motor Vehicle Insurance',
    pageDescription: `Exclusions refer to circumstances where the insurer is not required to pay the claim. Let us learn more about it below.`,
    icon: '../../../../rb_assets/assets/insurance/cross-shield.svg',
    backgroundImage:'../../../../rb_assets/assets/insurance/exclusions-background.svg',
    backgroundHeight:'30rem',
    marginTop:'5%',
    cards: [
      {
        cardHeader: '',
        inclusionsData: [
          {
            title: 'Alcohol/Drugs',
            text: 'Loss or damage brought on by unethical driving (due to alcohol or drugs) is not covered.',
          },
          {
            title: 'Geographical Area',
            text: 'Outside the defined geographic area, the vehicle is not insured for loss or damage.',
          },
          {
            title: 'Wear and Tear',
            text: "The vehicle's usage-related wear and tear are not covered.",
          },
          {
            title: 'Consumables',
            text: 'Consumable wear and tear, such as tubes and tyres, are not covered.',
          },
          {
            title: 'Invalid Driving License',
            text: 'Loss or damage caused by a person driving without a valid driving license is not covered.',
          },
          {
            title: 'Depreciation',
            text: 'Loss or damage brought on by the depreciation is not covered.',
          },
        ],
      },
    ],
  };
  benefitsMotorInsuranceData = {
    pageHeader: 'Benefits of Buying Motor Insurance Online',
    pageDescription: `Most <a class="active-text text-decoration-none cursor-pointer">motor insurance companies in India</a>  have taken their business online with advanced technology. The benefits of buying motor insurance online have perks, so let us look at them.`,
    icon: '../../../../rb_assets/assets/insurance/check-icon.svg',
    cards: [
      {
        cardHeader: '',
        inclusionsData: [
          {
            title: 'Timely Process',
            text: 'Buying motor insurance online is quick and convenient, allowing you to purchase or renew coverage anytime, anywhere.',
          },
          {
            title: 'Fast Renewal',
            text: 'Renewing motor insurance is also an important task. You can renew the motor insurance policy quickly, without any hiatus when you go online.',
          },
          {
            title: 'Satisfying Experience',
            text: 'With tech advancements, online insurance offers a convenient experience for buying, renewing, and comparing policies.',
          },
          {
            title: 'Less Premium',
            text: 'Since you can compare motor insurance policies online, you can select the best motor insurance policy with the lowest premium possible.',
          },
          {
            title: 'Smooth Processing',
            text: 'Online infrastructure enables digital-first insurers to settle claims, issue insurance policies efficiently, and serve policyholders.',
          },
        ],
      },
    ],
  };
  importanceOfMotorInsuranceData = {
    pageHeader: 'Importance of Motor Insurance',
    pageDescription: `Accidents have become more common as traffic has increased, making it critical for everyone to have the best motor insurance policy that protects them from financial damages.`,
    icon: '../../../../rb_assets/assets/insurance/check-icon.svg',
    column_no:2,
    cards: [
      {
        cardHeader: '',
        inclusionsData: [
          {
            title: 'Compulsory by Law',
            text: 'Third-party insurance is required in India to drive or ride a car lawfully. If you do not have motor insurance, you may incur penalties under the Motor Vehicles Act of 1988.',
          },
          {
            title: 'Less Stress',
            text: "Someone who gets motor insurance will have peace of mind when driving their vehicle on the country's roadways. It reduces the financial burden significantly.",
          },
          {
            title: 'Own Vehicle Loss or Damage',
            text: 'An own damage cover protects the covered vehicle from damage caused by natural or man-made disasters.',
          },
          {
            title: 'Compensates your Family',
            text: 'The death of a car owner in a collision is tragic and burdensome for their family. Motor insurance can help by providing financial support in such cases.',
          },
        ],
      },
    ],
  };
  questionsList=[
    {question:'How is Motor Insurance Premium calculated?', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.'},
    {question:'What is the validity period of a Motor Insurance Policy?',answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.'},
    {question:'What documents are needed to file a Motor Insurance Claim?',answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.'},
    {question:'If I lose my Vehicle Insurance Policy, can I get a duplicate one?',answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.'},
    {question:'Is Motor Insurance Renewal possible online?'},
    {question:'Is GST levied on Motor Insurance Premiums?'},
    {question:'What is IDV (Insured Declared Value)?'},
    {question:'Is GST levied on Motor Insurance Premiums?'},
    {question:'How can I get a discount on my Motor Insurance Policy Premium?'},
    {question:'Is it beneficial to buy Motor Insurance Online?'},
    {question:'For how long is the NCB on a policy valid?'}
  ]
}
