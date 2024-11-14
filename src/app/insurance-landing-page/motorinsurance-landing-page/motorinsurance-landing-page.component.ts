import { Component } from "@angular/core";
import { ApiService } from "../../utilis/service/api.service";
import { MetaService } from "../../utilis/service/meta.service";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ApiConstants } from "../../utilis/api.constant";

@Component({
  selector: "app-motorinsurance-landing-page",
  templateUrl: "./motorinsurance-landing-page.component.html",
  styleUrl: "./motorinsurance-landing-page.component.scss",
})
export class MotorinsuranceLandingPageComponent {
  inclusionsData = {
    pageHeader: "Inclusions Under Motor Vehicle Insurance",
    pageDescription: `Motor vehicle insurance typically includes coverage for accidents, theft, natural calamities, and third-party damage.`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    backgroundImage:
      "../../../../rb_assets/assets/insurance/inclusions-background.svg",
    backgroundImageMobileView:
      "../../../../rb_assets/assets/insurance/inclusions-background-sm.svg",
    backgroundHeight: "37rem",
    backgroundPosition: "40rem 55rem",
    marginClass: "mt-5",
    marginTop: "2%",
    cards: [
      {
        cardHeader: "Comprehensive Motor Insurance Policy ",
        inclusionsData: [
          {
            title: "Own Damage (OD) Cover",
            text: "It protects your vehicle against damage caused by accidents, natural disasters, or vandalism.",
          },
          {
            title: "Theft Cover",
            text: "It provides coverage for the loss of your vehicle in case it is stolen, thus giving you financial protection for replacement.",
          },
          {
            title: "Third-Party (TP) Cover",
            text: "It covers damages or injuries caused to others in an accident where you're at fault, helping you avoid costly legal liabilities.",
          },
        ],
      },
      {
        cardHeader: "Third-Party Liability Policy",
        inclusionsData: [
          {
            title: "Third-Party Cover",
            text: "It safeguards you from the legal and financial liabilities if you cause damage or injury to someone else on the road.",
          },
          {
            title: "Accidental Injury Cover",
            text: "It offers compensation for injuries caused to a third party in an accident where you're responsible, covering medical expenses.",
          },
        ],
      },
    ],
  };
  exclusionsData = {
    pageHeader: " Exclusions Under Motor Vehicle Insurance",
    pageDescription: `Not everything is covered under a motor insurance policy. Understanding the exclusions can help you avoid surprises when making a claim. Here’s what’s typically not included in your policy`,
    icon: "../../../../rb_assets/assets/insurance/cross-shield.svg",
    backgroundImage:
      "../../../../rb_assets/assets/insurance/exclusions-background.svg",
    backgroundImageMobileView:
      "../../../../rb_assets/assets/insurance/exclusion-background-sm.svg",
    backgroundHeight: "32rem",
    backgroundPosition: "40rem 50rem",
    marginTop: "5%",
    marginClass: "mt-5",
    cards: [
      {
        cardHeader: "Comprehensive Motor Insurance Policy",
        inclusionsData: [
          {
            title: "Alcohol/Drugs ",
            text: "No coverage is provided if damage or accidents occur while driving under the influence of alcohol or drugs.",
          },
          {
            title: "Geographical Area",
            text: "Coverage is limited to incidents occurring within the specified territorial limits. Damages or accidents outside this area may not be covered.",
          },
          {
            title: "Wear and Tear",
            text: "Regular wear and tear, mechanical failures, or electrical breakdowns are not included under standard coverage.",
          },
          {
            title: "Consumables",
            text: "Items like engine oil, brake fluid, and other consumables are not covered under standard policies.",
          },
          {
            title: "Invalid Driving License",
            text: "Claims get rejected if the driver at the time of the incident does not hold a valid driving license.",
          },
          {
            title: "Depreciation",
            text: "Standard policies do not cover the depreciation of your vehicle's parts, meaning you’ll receive a reduced claim amount based on wear and tear.",
          },
        ],
      },
    ],
  };
  benefitsMotorInsuranceData = {
    pageHeader: "Benefits of Buying Motor Insurance Online",
    pageDescription: `Buying motor insurance online offers convenience, transparency, and the ease of comparing multiple options in just a few clicks. Enjoy quick, hassle-free insurance purchases at your fingertips.`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    marginClass: "mt-0",
    pageName: "motor",
    cards: [
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Convenience",
            text: "Buy motor insurance from the comfort of your home, anytime. Skip the paperwork and get your policy instantly with just a few clicks.",
          },
          {
            title: "Quick Comparison",
            text: "Compare quotes from multiple insurers easily to find adequate coverage at the best price. Make informed decisions without the hassle of visiting multiple offices.",
          },
          {
            title: "Cost-Savings",
            text: "We can help you save on premiums. Get maximum coverage at competitive rates without hidden costs.",
          },
          {
            title: "Transparency",
            text: "Clear policy details and easy access to terms and conditions ensure no hidden surprises. Know exactly what’s covered and what’s not before you buy.",
          },
          {
            title: "Instant Policy Issuance",
            text: "Once you make your selection, receive your policy instantly online. No waiting around—get covered right away and start driving with peace of mind.",
          },
        ],
      },
    ],
  };
  importanceOfMotorInsuranceData = {
    pageHeader: "Importance of Motor Insurance",
    pageDescription: `Motor insurance isn’t just a legal requirement. It’s essential to protect your finances against unexpected accidents, theft, and damages.`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    column_no: 2,
    marginClass: "mt-0",
    pageName: "motor",
    cards: [
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Financial Protection",
            text: "Shield yourself from hefty repair bills after an accident. Motor insurance covers damages, saving you from unexpected expenses.",
          },
          {
            title: "Legal Compliance",
            text: "Stay on the right side of the law with mandatory third-party insurance. Avoid fines and penalties by insuring your vehicle.",
          },
          {
            title: "Third-Party Coverage",
            text: "Accidents happen, but you don’t have to bear the cost. Motor insurance covers damages or injuries caused to others, protecting you from legal liabilities.",
          },
          {
            title: "Peace of Mind",
            text: "Drive your vehicle with confidence knowing you’re safeguarded against accidents, theft, and other possible unfortunate events.",
          },
        ],
      },
    ],
  };
  addOnspageData = [
    {
      pageHeader: `What is Motor Insurance?`,
      pageDescriptions: `<p class="decsription-text">
     Motor insurance is a type of insurance policy that provides financial protection against losses related to your vehicle, whether it's due to accidents, theft, or damage. It covers repair costs, medical expenses, and liability for third-party damages, helping you drive with peace of mind.
    </p>
    <p class="decsription-text">
    Motor insurance purchase is beyond being a legal requirement in India. It ensures you’re not left footing the bill for unexpected incidents on the road. Whether you want the basic <span class="link-text">third-party coverage </span>or comprehensive protection, the right plan can save you from costly surprises.

      
    </p>`,
      pageName: "motor",
      addOnsHead: "Motor Insurance Add-Ons You Can Choose From",
      addOnSubHead: `<p class="motor-description-text">
      Enhance your coverage with multiple add-ons designed to protect you from unexpected costs and give you extra benefits.

    </p>`,

      addOnsPageCardData: [
        {
          id: 1,
          heading: "Zero Depreciation",
          imageSrc:
            "../../../../rb_assets/assets/insurance/zero-depreciation.svg",
          text: "Get full coverage for your vehicle’s parts without any deductions for depreciation. This ensures you’re reimbursed for the complete cost of repairs or replacements.",
        },
        {
          id: 2,
          heading: "Roadside Assistance",
          imageSrc:
            "../../../../rb_assets/assets/insurance/assistance-road.svg",
          text: "Avoid worrying about being stranded on the road again. This add-on can provide 24/7 help for breakdowns, flat tires, or running out of fuel, so you can get back on the move quickly.",
        },
        {
          id: 3,
          heading: "Engine Protection",
          imageSrc: "../../../../rb_assets/assets/insurance/engine.svg",
          text: "Guard your engine from expensive repairs caused by water damage, oil leakage, or other mechanical failures.",
        },
        {
          id: 4,
          heading: "No Claim Bonus Cover",
          imageSrc: "../../../../rb_assets/assets/insurance/ncb-cover.svg",
          text: "Retain your hard-earned discounts even if you need to file a claim.",
        },
        {
          id: 5,
          heading: "Key Replacement Cover",
          imageSrc:
            "../../../../rb_assets/assets/insurance/key-replacement-cover.svg",
          text: "This add-on coverage takes care of the replacement costs and ensures you’re back on the road without the added expense of new keys/locks.",
        },
        {
          id: 6,
          heading: "Personal Accident Cover",
          imageSrc: "../../../../rb_assets/assets/insurance/pa-cover.svg",
          text: "Get compensation for accidental injuries or death while traveling in your vehicle. This coverage provides financial security for you and your family in the event of an accident.",
        },
        {
          id: 7,
          heading: "Personal Accident Cover for Riders",
          imageSrc: "../../../../rb_assets/assets/insurance/pa-cover-rider.svg",
          text: "Ensure your passengers are protected with compensation for injuries or death caused by accidents.",
        },
      ],
    },
  ];
  navigatorTabsData = [
    {
      id: 1,
      label: "Car Insurance Companies",
      icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
      altText: "Home Icon",
      link: "https://www.renewbuy.com/motor-insurance/car-insurance/companies",
    },
    {
      id: 2,
      label: "Third Party Insurance",
      icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
      altText: "Profile Icon",
      link: "https://www.renewbuy.com/motor-insurance/third-party-insurance",
    },
    {
      id: 3,
      label: "Car Insurance Renewal",
      icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
      altText: "Settings Icon",
      link: "https://www.renewbuy.com/motor-insurance/car-insurance/renewal",
    },
    {
      id: 4,
      label: "How To Renew Motor Insurance Policy",
      icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
      altText: "Help Icon",
      link: "https://www.renewbuy.com/articles/motor-insurance/how-renew-motor-insurance-policy",
    },
  ];
  questionsList = [
    {
      question: "What is motor insurance, and why do I need it?",
      answer:
        "Motor insurance is a contract that provides financial protection against losses related to your vehicle, such as accidents, theft, or damage. You need this type of insurance policy to safeguard your finances when driving on public roads, besides the mandatory <span class='motor-link-text'> third-party insurance.</span> ",
    },
    {
      question: "How do I choose the right motor insurance policy?",
      answer:
        "Choosing the right car or bike insurance policy involves assessing your needs, understanding the types of coverage available, and comparing quotes. Consider your vehicle's value, driving habits, and whether you need comprehensive or third-party coverage to find the best plan.",
    },
    {
      question: "Which factors affect my motor insurance premium?",
      answer:
        "Your driving history, age, location, the type of vehicle, and how often you drive - all of these factors influence the motor insurance premium. Many Insurers also consider any previous claims you made before issuing or renewing a policy.",
    },
    {
      question:
        "What is the difference between third-party and comprehensive coverage?",
      answer:
        "Third-party insurance coverage only protects you against claims made by other parties in the event of an accident where you are at fault. Comprehensive motor insurance coverage, on the other hand, covers damages to your vehicle and third-party claims.",
    },
    {
      question: "How do I file a claim after an accident?",
      answer:
        "Filing a claim is easy with RenewBuy Insurance. First, let your insurance company know about the accident as soon as possible. They’ll ask for details like when and where it happened, and they’ll guide you through what you need to do next. You can also check the steps given above. ",
    },
    {
      question: "Can I customize my car insurance policy?",
      answer:
        "Most car insurance companies allow you to tailor your policy to fit your needs. This might include adding extra coverage or adjusting your deductible. Talk to us about what you want, and we’ll help you customize your policy.",
    },
    {
      question: "What should I do if my vehicle is stolen or damaged?",
      answer:
        "If your car gets stolen or damaged, the first thing to do is report the incident to the police. They’ll provide a report you’ll need for your insurance claim. Then, contact us/your insurance company to let them know what happened and start the claims process.",
    },
    {
      question: "How can I track the status of my claim?",
      answer:
        "You can track your claim through our website or app and see updates. If required, communicate directly with us or give us a call to check in and get the latest updates on your claim.",
    },
    {
      question: "Are there any exclusions in my motor insurance policy?",
      answer:
        "Yes, there can be exclusions in your policy, which include damages from driving under the influence, using your car for business without coverage, or driving without a valid license. Always read your policy carefully to know what’s covered and what’s not.",
    },
    {
      question: "What is a cashless garage, and how does it work?",
      answer:
        "A cashless garage allows you to get your car repaired without paying for the repair bills upfront. When you take your vehicle there, the garage deals with your insurance company for the costs. It makes the repair process a lot easier and saves you from worrying about payment right away. However, you would need to pay the deductible as defined in your policy.",
    },
  ];
  constructor(private apiService: ApiService, private meta: MetaService) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment["bearerToken"]}`,
    });
    let url = `${environment["strapiDomain"]}${ApiConstants["MOTOR_INSURANCE"]}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      console.log(response);
      this.meta.updateMeta(
        response?.data?.attributes?.seo?.metaTitle,
        response?.data?.attributes?.seo?.metaDescription,
        response?.data?.attributes?.seo?.keywords,
        response?.data?.attributes?.seo?.canonicalURL
      );
    });
  }
}
