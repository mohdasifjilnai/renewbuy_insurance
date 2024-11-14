import { Component } from "@angular/core";
import { ApiService } from "../../utilis/service/api.service";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ApiConstants } from "../../utilis/api.constant";
import { MetaService } from "../../utilis/service/meta.service";

@Component({
  selector: "app-healthinsurance-landing-page",
  templateUrl: "./healthinsurance-landing-page.component.html",
  styleUrl: "./healthinsurance-landing-page.component.scss",
})
export class HealthinsuranceLandingPageComponent {
  addOnspageData = [
    {
      pageHeader: `What is Health Insurance?`,
      pageDescriptions: `<p class="decsription-text">
Health insurance, also called medical insurance, is a plan that helps cover your healthcare costs. When you have health insurance, you enter into an agreement with an insurance company, which promises to help pay for medical expenses if you get injured, face a serious illness, or need treatment for an accident. It’s a way to ease the financial burden of healthcare, so you can focus on getting better without worrying as much about the cost.    </p>
    <p class="decsription-text">
To receive the benefits of a health insurance policy, policyholders pay a set amount called a premium. In return, the plan provides a range of coverage options, including expenses related to hospital stays before and after treatment, care at home if needed, coverage for daycare procedures, and even an annual medical check-up. This support can make healthcare more manageable and affordable.    </p>`,
      pageName: "health",
      addOnsHead: "Addons Under Health Insurance",
      addOnSubHead: `<p class="motor-description-text">
Health insurance riders let you boost your basic coverage by paying a bit more on your premium. Here are some popular riders you might want to explore before choosing a health insurance plan.
    </p>`,
      addOnsPageCardData: [
        {
          id: 1,
          heading: "Maternity Cover",
          imageSrc: "../../../../rb_assets/assets/insurance/maternityCover.svg",
          text: "You can cover the expenses related to maternity, pre & post-natal expenses & newborn child under a maternity add-on rider.",
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
          heading: "Personal Accident",
          imageSrc:
            "../../../../rb_assets/assets/insurance/personalAccident.svg",
          text: "You will receive the total amount if you become completely permanently disabled or partially disabled due to an accident.",
        },
        {
          id: 4,
          heading: "Hospital Daily Cash",
          imageSrc:
            "../../../../rb_assets/assets/insurance/hospitalDailyCash.svg",
          text: "You will get a daily cash allowance to take care of additional expenses such as food, travel, etc. at the time of hospitalization.",
        },
        {
          id: 5,
          heading: "Reduction of Waiting Period",
          imageSrc:
            "../../../../rb_assets/assets/insurance/reductionofWaitingPeriod.svg",
          text: "A lump sum is paid upon diagnosis of a critical illness during the policy term, such as heart disease, kidney failure, or cancer.",
        },
        {
          id: 6,
          heading: "Room Rent Waiver",
          imageSrc: "../../../../rb_assets/assets/insurance/roomRentWaiver.svg",
          text: "This rider allows you to increase the sub-limit for hospital room rents or choose no sub-limit for greater flexibility and comfort.",
        },
      ],
    },
  ];

  inclusionsData = {
    pageHeader: "Ensure Health Insurance that delivers.",
    pageDescription: `Below are the benefits of choosing the best health insurance from the best health insurer in India:`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    backgroundImage:
      "../../../../rb_assets/assets/insurance/inclusions-background.svg",
    backgroundImageMobileView:'../../../../rb_assets/assets/insurance/inclusions-background-sm.svg',
    backgroundHeight: "39rem",
    marginTop: "5%",
    visibilityHidden:true,
    cards: [
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Wide Range of Health Plans",
            text: "Choose from a variety of health plans designed to fit your needs and budget, ensuring complete coverage and peace of mind.",
          },
          {
            title: "Quick Grievance Redressal",
            text: "Experience quick grievance resolution processes that prioritize your concerns, ensuring efficient solutions and high customer satisfaction.",
          },
          {
            title: "Easy Claim Settlement Process",
            text: "Enjoy a hassle-free claim settlement process designed for simplicity and speed, ensuring quick reimbursements and minimal paperwork.",
          },
        ],
      },
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Flexible Payment Option",
            text: "Take advantage of flexible premium payment options that align with your financial planning, making it easier to manage your health insurance costs.",
          },
          {
            title: "Renewal Benefit Option",
            text: " Enjoy renewal benefits that reward your loyalty with improved coverage or discounts, ensuring ongoing protection and added value.",
          },
          {
            title: "Profitability Option",
            text: "Health insurance portability allows you to maintain your coverage benefits when switching providers, ensuring continuous care without losing protection.",
          },
        ],
      },
    ],
  };
  exclusionsData = {
    pageHeader: "What is not covered under Health Insurance plans?",
    pageDescription: `The following situations and conditions are not covered under Health Insurance Plans:`,
    icon: "../../../../rb_assets/assets/insurance/cross-shield.svg",
    backgroundImage:
      "../../../../rb_assets/assets/insurance/exclusions-background.svg",
      backgroundImageMobileView:'../../../../rb_assets/assets/insurance/exclusion-background-sm.svg',
      backgroundHeight: "38rem",
      marginTop: "7%",
      visibilityHidden:true,
    cards: [
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Self-Inflicted Injury",
            text: "No coverage for injuries caused by self-harm or suicide attempts.",
          },
          {
            title: "Dental Treatment",
            text: "Excludes routine dental procedures unless medically necessary for trauma.",
          },
          {
            title: "Obesity Treatment",
            text: "Weight loss treatments or surgeries are not covered under policy.",
          },
          {
            title: "Abuse of Drugs & Alcohol",
            text: "No claims for conditions arising from substance abuse or addiction.",
          },
          {
            title: "Adventure Sports",
            text: "Injuries from participating in risky sports are excluded from coverage",
          },
          {
            title: "IVF Treatment",
            text: "Fertility treatments, including IVF, are not covered by health insurance",
          },
          {
            title: "Cosmetic Treatment",
            text: "No coverage for cosmetic or aesthetic surgeries unless medically necessary.",
          },
          {
            title: "Injuries arise during a War-like situation",
            text: "War-related injuries, including terrorism, are excluded from insurance claims.",
          },
          {
            title: "Breach of Law/Criminal activity",
            text: "No claims for injuries caused during illegal activities or crimes.",
          },
        ],
      },
    ],
  };
  benefitsMotorInsuranceData = {
    pageHeader: "Benefits of Buying Motor Insurance Online",
    pageDescription: `Most <a class="active-text text-decoration-none cursor-pointer">motor insurance companies in India</a>  have taken their business online with advanced technology. The benefits of buying motor insurance online have perks, so let us look at them.`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    visibilityHidden:true,
    cards: [
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Timely Process",
            text: "Buying motor insurance online is quick and convenient, allowing you to purchase or renew coverage anytime, anywhere.",
          },
          {
            title: "Fast Renewal",
            text: "Renewing motor insurance is also an important task. You can renew the motor insurance policy quickly, without any hiatus when you go online.",
          },
          {
            title: "Satisfying Experience",
            text: "With tech advancements, online insurance offers a convenient experience for buying, renewing, and comparing policies.",
          },
          {
            title: "Less Premium",
            text: "Since you can compare motor insurance policies online, you can select the best motor insurance policy with the lowest premium possible.",
          },
          {
            title: "Smooth Processing",
            text: "Online infrastructure enables digital-first insurers to settle claims, issue insurance policies efficiently, and serve policyholders.",
          },
        ],
      },
    ],
  };
  importanceOfMotorInsuranceData = {
    pageHeader:
      "Key factors impacting Health Insurance Premiums",
    pageDescription: `Below mentioned are the factors that can affect your health insurance premium amount:`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    pageName:'health',
    isViewMore:true,
    visibilityHidden:true,
    cards: [
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Age",
            text: "Older individuals typically incur higher premiums due to increased health risks over time.",
          },
          {
            title: "Gender",
            text: "Premium rates may differ based on gender-specific health risk factors and statistics.",
          },
          {
            title: "Medical History",
            text: "Pre-existing conditions often lead to significanty higher premium costs for applicants.",
          },
          {
            title: "Sum Insured Amount",
            text: "Choosing a higher sum insured generally results in increased premium costs overall.",
          },
          {
            title: "Policy Term",
            text: "Longer policy terms often lead to lower monthly premium payments for insured individuals.",
          },
          {
            title: "Type of Health Plan",
            text: "Comprehensive health plans usually have higher premiums due to broader coverage options",
          },
          {
            title: "Additional Riders",
            text: "Adding riders to a policy increases the overall premium and enhances coverage options.",
          },
          {
            title: "Lifestyle of the Applicant",
            text: "Unhealthy lifestyle choices, such as smoking, can increase insurance premium amounts significantly.",
          },
        ],
      },
    ],
  };
  keyOfHealthInsuranceData = {
    pageHeader: "Key Health Insurance Jargons You Should Know",
    pageDescription: `Understanding key health insurance jargons is essential for navigating coverage options effectively.`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    pageName:'health',
    isViewMore:true,
    visibilityHidden:true,
    cards: [
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Premium",
            text: "The amount you pay your insurance company for coverage. It is usually paid every month.",
          },
          {
            title: "Restoration Benefit",
            text: "Restoration benefit refills your sum insured amount if it gets exhausted in a single policy year.",
          },
          {
            title: "AYUSH Treatment",
            text: "It is a type of treatment related to Ayurveda, Yoga and naturopathy, Unani, Siddha & Homoeopathy.",
          },
          {
            title: "Network Hospitals",
            text: "The group of healthcare providers, hospitals, & facilities that have a contract with your health insurance company to provide cashless treatment.",
          },
          {
            title: "Copayment (Copay)",
            text: "A fixed amount you pay for a specific healthcare service, such as a doctor's visit or prescription medication. For ex:, you might have a copay of $20 for each doctor's visit.",
          },
          {
            title: "Add-on Riders",
            text: "Add-on riders or additional riders are the benefits that you can add to your health plan to enhance the coverage benefits by paying some additional premium amount.",
          },
          {
            title: "Domiciliary Treatment:",
            text: "It is a type of treatment in which policyholders can receive treatment at home if they cannot reach the hospital or find medical facilities for a specific treatment under the supervision of a medical professional.",
          },
          {
            title: "Deductible",
            text: "The amount you must pay out of pocket before your insurance coverage starts. For example, if your deductible is INR 1K, you must pay the first INR 1K of covered expenses before your insurance begins to pay.",
          },
          {
            title: "Preauthorization",
            text: "The process of obtaining approval from your insurance company before receiving certain medical services or procedures. This is typically required for expensive or non-emergency procedures to ensure they are medically necessary.",
          },
          {
            title: "Free Look Period",
            text: "This is a period in which you can cancel or change your health insurance company without paying any penalty. Generally, it lasts for 15 days from the date of the policy.",
          },
          {
            title: "Pre-existing condition",
            text: "A health condition or illness you had before buying a health insurance plan.",
          },
        ],
      },
    ],
  };
  navigatorTabsData = [
    // {
    //   id: 1,
    //   label: "Best Health Insurance Companies in India",
    //   icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
    //   altText: "Home Icon",
    //   link: "https://www.renewbuy.com/health-insurance/companies",
    // },
    // {
    //   id: 2,
    //   label: "Best Health Insurance Plans in India",
    //   icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
    //   altText: "Profile Icon",
    //   link: "' https://www.renewbuy.com/articles/health-insurance/best-health-insurance-plans-in-india",
    // },
    // {
    //   id: 3,
    //   label: "Health Insurance Premium Calculator",
    //   icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
    //   altText: "Settings Icon",
    //   link: "https://www.renewbuy.com/health-insurance/premium-calculator",
    // },
    // {
    //   id: 4,
    //   label: "Compare Health Insurance",
    //   icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
    //   altText: "Help Icon",
    //   link: "https://www.renewbuy.com/health-insurance/compare-health-insurance/",
    // },
  ];
  questionsList = [
    // {
    //   question:
    //     "What are the different health insurance policies available in India?",
    //   answer:
    //     "There are many types of health insurance policies available in India; these include individual plans, family floater plans, group health insurance plans, etc.",
    // },
    // {
    //   question: "How much does health insurance cost in India?",
    //   answer:
    //     "There are many different policies that you can buy, and there are many conditions that affect a health insurance policy; these include age, gender, medical history, lifestyle, etc.",
    // },
    // {
    //   question: "What is the right age to buy a health insurance policy?",
    //   answer:
    //     "There is no right age to buy a policy. But the earlier you buy the policy, the lesser the premium. The reason is that when you are young, there is a lesser risk of illness as compared to someone who is in their 50s or 60s.",
    // },
    // {
    //   question: "What is a copayment?",
    //   answer:
    //     "Copayment is a certain percentage of the claim that the insured agrees to pay along with the insurance company. The insurer then pays the remaining claim amount.",
    // },
    // {
    //   question: "Can I have more than one medical insurance policy?",
    //   answer:
    //     "Yes, you can have more than one medical insurance policy. For example, you can buy an individual plan and a family floater plan if you are covered under a group health insurance plan.",
    // },
    // {
    //   question: "Is a medical test required to buy a health insurance plan?",
    //   answer:
    //     "Medical tests are not mandatory to buy health insurance. But most insurance companies in India have made medical tests mandatory for people over 45 years of age. This can vary depending upon the age of the insured.",
    // },
    // {
    //   question: "How many claims are allowed during the term of the policy?",
    //   answer:
    //     "The number of claims allowed differs from policy to policy. Some policies allow one or two claims per year, whereas other policies allow an unlimited number of claims.",
    // },
    // {
    //   question: "What is the free look period in a health insurance policy?",
    //   answer:
    //     "A free look period is available up to 15 days up to the purchase of the policy. During this period, you can review the features, coverage and decide whether you want to keep the policy or not.",
    // },
    // {
    //   question: "What are network hospitals?",
    //   answer:
    //     "Network hospitals refer to the hospitals that are included in the panel of the insurance company. You can avail of cashless hospitalization in these hospitals. Non-network hospitals are general category hospitals where you can get treatment and then file for reimbursement later.",
    // },
    // {
    //   question: "Is there any specific plan for cancer?",
    //   answer:
    //     "One can always opt for a standalone critical insurance plan to cover diseases like cancer. The buyer is advised to read the coverages of the plan before purchasing one.",
    // },
    // {
    //   question: "What is Copayment in health insurance?",
    //   answer:
    //     "Copayment in health insurance is a certain percentage of the claim that the insured agrees to pay along with the insurance company. The insurer then pays the remaining claim amount.",
    // },
    // {
    //   question: "What are network hospitals in health insurance?",
    //   answer:
    //     "Network hospitals in health insurance refer to the hospitals that are included in the panel of the insurance company. You can avail of cashless hospitalization in these hospitals. Non-network hospitals are general category hospitals where you can get treatment and then file for reimbursement later.",
    // },
    // {
    //   question: "Does Health Insurance covers mental health treatments?",
    //   answer:
    //     "Yes, health insurance plans offer coverage for mental health treatments but the coverage varies from plan to plan.",
    // },
    // {
    //   question: "Can I have multiple health insurance plans at a time?",
    //   answer:
    //     "Yes, you can use multiple health insurance policy for the same medical expense. Some health insurance plan also covers partial treatment of the critical illness within the policy.",
    // },
    // {
    //   question: "Does smoking affect health insurance premiums?",
    //   answer:
    //     "Yes, if you are a smoker then you will have to pay a higher health insurance premium than a non-smoker. Some health insurance plan also covers partial treatment of the critical illness within the policy.",
    // },
  ];
  constructor(private apiService: ApiService, private meta: MetaService) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment["bearerToken"]}`,
    });
    let url = `${environment["strapiDomain"]}${ApiConstants["HEALTH_INSURANCE"]}`;
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
