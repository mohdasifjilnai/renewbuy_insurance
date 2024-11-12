import { Component } from '@angular/core';
import { ApiService } from '../../utilis/service/api.service';
import { MetaService } from '../../utilis/service/meta.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiConstants } from '../../utilis/api.constant';

@Component({
  selector: 'app-motorinsurance-landing-page',
  templateUrl: './motorinsurance-landing-page.component.html',
  styleUrl: './motorinsurance-landing-page.component.scss',
})
export class MotorinsuranceLandingPageComponent {
  inclusionsData = {
    pageHeader: 'Inclusions Under Motor Vehicle Insurance',
    pageDescription: `The scope of motor insurance coverage depends on the chosen type, with
      third-party and comprehensive vehicle insurance offering different
      components.`,
    icon: '../../../../rb_assets/assets/insurance/check-icon.svg',
    backgroundImage:'../../../../rb_assets/assets/insurance/inclusions-background.svg',
    backgroundImageMobileView:'../../../../rb_assets/assets/insurance/inclusions-background-sm.svg',
    backgroundHeight:'37rem',
    backgroundPosition:'40rem 55rem',
    marginClass:'mt-5',
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
    backgroundImageMobileView:'../../../../rb_assets/assets/insurance/exclusion-background-sm.svg',
    backgroundHeight:'32rem',
    backgroundPosition:'40rem 50rem',
    marginTop:'5%',
    marginClass:'mt-5',
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
    marginClass:'mt-0',
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
    marginClass:'mt-0',
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
  addOnspageData = [{
    pageHeader:`What is Motor Insurance?`,
    pageDescriptions: `<p class="decsription-text">
      Motor insurance is required for all vehicles operating on Indian roadways,
      and every owner/driver should have an active motor insurance policy. An
      insurance policy's principal function is to offer a financial safety net
      for a third party's unintentional damage, death, or injury.
    </p>
    <p class="decsription-text">
      Aside from <span class="link-text">third-party liability</span>, own-damage
      coverage protects the insured vehicle's physical injuries or losses in the
      event of a natural or manufactured calamity. This plan provides a
      stress-free and secure drive on the country's roadways. To have a cover
      for everything, buying a comprehensive motor insurance policy is
      advisable.
    </p>` ,
    pageName:'motor',
    addOnsHead:'Add-ons Under Motor Insurance',
    addOnSubHead:`<p class="motor-description-text">
      Additional motor insurance covers can be bought with the insurance policy
      in order to extend the coverage benefits. We have a list of the most
      popular <span class="motor-link-text">motor insurance add-ons</span> listed
      below. Subject to availability.
    </p>`,
   
    addOnsPageCardData :  [
      {
        id: 1,
        heading: 'Zero Depreciation',
        imageSrc: '../../../../rb_assets/assets/insurance/zero-depreciation.svg',
        text: 'This addition ensures the motor insurance company settles claims without depreciation costs, leading to a higher payout and greater financial protection for you.',
      },
      {
        id: 2,
        heading: 'Assistance on the Road',
        imageSrc: '../../../../rb_assets/assets/insurance/assistance-road.svg',
        text: 'If you find yourself stranded on the road, this add-on cover provides roadside assistance, including towing services, from the motor insurance company.',
      },
      {
        id: 3,
        heading: 'Engine Protection',
        imageSrc: '../../../../rb_assets/assets/insurance/engine.svg',
        text: "This add-on protects your vehicle's engine, one of the most crucial components, a key addition to motor insurance.",
      },
      {
        id: 4,
        heading: 'NCB Cover',
        imageSrc: '../../../../rb_assets/assets/insurance/ncb-cover.svg',
        text: 'If your car keys get stolen, damaged, or lost, this add-on cover will help you cover the cost of the key.',
      },
      {
        id: 5,
        heading: 'Key Replacement Cover',
        imageSrc:
          '../../../../rb_assets/assets/insurance/key-replacement-cover.svg',
        text: 'If your car keys get stolen, damaged, or lost, this add-on cover will help you cover the cost of the key.',
      },
      {
        id: 6,
        heading: 'PA Cover',
        imageSrc: '../../../../rb_assets/assets/insurance/pa-cover.svg',
        text: 'In India, PA Cover is mandatory alongside third-party car insurance. It provides financial protection in the event of death or permanent disability while driving.',
      },
      {
        id: 7,
        heading: 'PA Cover for Riders',
        imageSrc: '../../../../rb_assets/assets/insurance/pa-cover-rider.svg',
        text: 'You may protect your loved ones in the event of a permanent disability or death while riding a vehicle when you purchase this add-on cover.',
      },
    ]
  }]
  navigatorTabsData = [
    {
      id: 1,
      label: 'Benefits of Buying Motor Insurance Online?',
      icon: '../../../../rb_assets/assets/insurance/navigator-icon.svg',
      altText: 'Home Icon',
      link:"'https://www.renewbuy.com/"
    },
    {
      id: 2,
      label: 'Reasons to Buy Motor Insurance',
      icon: '../../../../rb_assets/assets/insurance/navigator-icon.svg',
      altText: 'Profile Icon',
      link:"'https://www.renewbuy.com/"
    },
    {
      id: 3,
      label: 'Renewal Process of Motor Insurance Policy',
      icon: '../../../../rb_assets/assets/insurance/navigator-icon.svg',
      altText: 'Settings Icon',
      link:"'https://www.renewbuy.com/"
    },
    {
      id: 4,
      label: 'Process for Filing the Claim Under Motor Insurance',
      icon: '../../../../rb_assets/assets/insurance/navigator-icon.svg',
      altText: 'Help Icon',
      link:"'https://www.renewbuy.com/"
    },
  ];
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
  constructor(private apiService: ApiService, private meta: MetaService) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    let url = `${environment['strapiDomain']}${ApiConstants['INSURANCE_HOME']}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      this.meta.updateMeta(
        response?.data?.attributes?.seo?.metaTitle,
        response?.data?.attributes?.seo?.metaDescription,
        response?.data?.attributes?.seo?.keywords,
        response?.data?.attributes?.seo?.canonicalURL
      );
    });
  }
}
