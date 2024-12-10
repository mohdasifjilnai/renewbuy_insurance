import { Component } from "@angular/core";
import { ApiService } from "../../utilis/service/api.service";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ApiConstants } from "../../utilis/api.constant";
import { MetaService } from "../../utilis/service/meta.service";

@Component({
  selector: "app-lifeinsurance-landing-page",
  templateUrl: "./lifeinsurance-landing-page.component.html",
  styleUrl: "./lifeinsurance-landing-page.component.scss",
})
export class LifeinsuranceLandingPageComponent {
  life = {
    pageType: "Life",
  };

  addOnspageData = [
    {
      pageHeader: `What is Life Insurance?`,
      pageDescriptions: `<p class="decsription-text">
          Life insurance is a promise of financial security for your loved ones. It ensures your family’s future is protected, even when life throws the unexpected. From covering daily expenses to long-term goals like education or home loans, a suitable life insurance plan can give your family a financial cushion when you’re not around to provide. Whether you’re a parent, spouse, or the sole breadwinner, securing your family’s future can offer you peace of mind.</p>`,
      pageName: "life",
      addOnsHead: "Popular Riders to Enhance Your Policy",
      addOnSubHead: `<p class="motor-description-text">
          Add-ons or riders can boost your life insurance plan to suit your specific needs. Some of the most common life insurance riders include:
        </p>`,
      addOnsPageCardData: [
        {
          id: 1,
          heading: "Accidental Death Benefit",
          imageSrc: "../../../../rb_assets/assets/insurance/accident.svg",
          text: "It gives an additional payout to your nominee if you pass away in an accident",
        },
        {
          id: 2,
          heading: "Critical Illness",
          imageSrc:
            "../../../../rb_assets/assets/insurance/criticalIllness.svg",
          text: "A lump sum is paid upon diagnosis of a critical illness during the policy term, such as heart disease, kidney failure, or cancer.",
        },
        {
          id: 3,
          heading: "Waiver of Premium",
          imageSrc:
            "../../../../rb_assets/assets/insurance/personalAccident.svg",
          text: "If you become disabled or critically ill, this rider waives off future premiums while keeping your policy active.",
        },
      ],
    },
  ];

  importanceOfMotorInsuranceData = {
    pageHeader: "The Significance of Life Insurance in Financial Planning",
    pageDescription: `Life insurance is a key component of financial planning, offering protection for your 
      family’s future. It ensures financial stability by covering expenses, debts, and income loss in your absence.`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    pageName: "Life",
    column_no: 2,
    isViewMore: true,
    visibilityHidden: true,
    cards: [
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Financial Security",
            text: "In the event of your passing, life insurance ensures your family doesn’t face financial hardship.",
          },
          {
            title: "Long-Term Savings",
            text: "Many policies double as investment tools and can help you build wealth over time.",
          },
          {
            title: "Tax Benefits",
            text: "Premiums paid and maturity proceeds are often eligible for tax benefits under Section 80C and 10(10D) of the Income Tax Act.",
          },
          {
            title: "Peace of Mind",
            text: "There’s no price tag for peace of mind. Knowing your family will be financially stable lets you live life stress-free.",
          },
        ],
      },
    ],
  };
  insuranceCardData = {
    heading: `Types of Life Insurance Policies`,
    subHeading: `Understanding the options available can help you choose the right life insurance policy for your needs.`,
    cards: [
      {
        imageUrl: "../../../../rb_assets/assets/insurance/term-i.svg",
        altText: "Term Insurance",
        title: "Term Insurance",
        description: `It is the simplest & most affordable option. It provides life coverage and ensures your loved ones receive a lump sum if something happens to you during the policy term.`,
        linkText: "",
        linkClass: "active-text text-decoration-none",
      },
      {
        imageUrl: "../../../../rb_assets/assets/insurance/life-i.svg",
        altText: "Whole Life Insurance",
        title: "Whole Life Insurance",
        description: `This type of policy lasts a lifetime (or up to 99 years). It offers life coverage and helps you leave a legacy for your family. It provides permanent death benefit coverage for the insured person.`,
        linkText: "",
        linkClass: "active-text text-decoration-none",
      },
      {
        imageUrl: "../../../../rb_assets/assets/insurance/endowent.svg",
        altText: "Endowment Plans",
        title: "Endowment Plans",
        description: `If you want the best of insurance and savings, endowment plans can give life coverage and maturity benefits, making it a great way to save for future milestones.`,
        linkText: "",
        linkClass: "active-text text-decoration-none",
      },
      {
        imageUrl: "../../../../rb_assets/assets/insurance/ulips.svg",
        altText: "Unit-Linked Insurance Plans (ULIPs)",
        title: "Unit-Linked Insurance Plans (ULIPs)",
        description: `ULIPs combine life insurance with investment opportunities. A portion of your premium goes toward life cover, and the rest is invested in equity or debt markets.`,
        linkText: "",
        linkClass: "active-text text-decoration-none",
      },
      {
        imageUrl: "../../../../rb_assets/assets/insurance/child-plan.svg",
        altText: "Child Plans",
        title: "Child Plans",
        description: `You can secure your child’s future with a plan designed to fund their education and life goals, even in your absence. This will assist in accumulating funds through investments in a variety of instruments`,
        linkText: "",
        linkClass: "active-text text-decoration-none",
      },
      {
        imageUrl: "../../../../rb_assets/assets/insurance/retirement.svg",
        altText: "Retirement Plans",
        title: "Retirement Plans",
        description: `You can ensure a comfortable life post-retirement with life insurance plans that provide a steady income for you and your spouse.You will get a lump sum or a fixed installment amount in intervals after your retirement.`,
        linkText: "",
        linkClass: "active-text text-decoration-none",
      },
    ],
  };

  navigatorTabsData = [];
  questionsList = [];
  constructor(private apiService: ApiService, private meta: MetaService) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment["bearerToken"]}`,
    });
    let url = `${environment["strapiDomain"]}${ApiConstants["LIFE_INSURANCE"]}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      this.meta.updateMeta(
        response?.data?.attributes?.seo?.metaTitle,
        response?.data?.attributes?.seo?.metaDescription,
        response?.data?.attributes?.seo?.keywords,
        response?.data?.attributes?.seo?.canonicalURL
      );
      this.questionsList = response?.data?.attributes?.faqs?.data;
      this.navigatorTabsData = response?.data?.attributes?.help_link;
    });
  }
}
