import { Component } from "@angular/core";

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
          heading: "Maternity Cove",
          imageSrc:
            "../../../../rb_assets/assets/insurance/zero-depreciation.svg",
          text: ` A maternity add-on rider covers costs related to pregnancy, including prenatal and postnatal care, as well as expenses for your newborn.`,
        },
        {
          id: 2,
          heading: "Hospital Daily Cash",
          imageSrc:
            "../../../../rb_assets/assets/insurance/assistance-road.svg",
          text: `With a daily cash allowance rider, you receive extra funds each day during a hospital stay to help cover additional expenses.`,
        },
        {
          id: 3,
          heading: "Critical Illness",
          imageSrc: "../../../../rb_assets/assets/insurance/pa-cover.svg",
          text: "A critical illness rider provides a lump-sum payout if you’re diagnosed with a serious illness like heart disease, kidney failure, or cancer, helping with treatment and other expenses.",
        },
        {
          id: 4,
          heading: "Reduction of Waiting Period",
          imageSrc: "../../../../rb_assets/assets/insurance/ncb-cover.svg",
          text: "If diagnosed with a serious illness like heart disease, kidney failure, or cancer, you'll receive a lump-sum payment to help with costs.",
        },
        {
          id: 5,
          heading: "Personal Accident",
          imageSrc:
            "../../../../rb_assets/assets/insurance/key-replacement-cover.svg",
          text: "If you experience a permanent or partial disability from an accident, you’ll receive a full payout to support your needs.",
        },
        {
          id: 6,
          heading: "Room Rent Waiver",
          imageSrc: "../../../../rb_assets/assets/insurance/engine.svg",
          text: "This rider lets you raise the limit on hospital room costs—or even remove the limit—giving you more comfort and flexibility during a hospital stay.",
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
    backgroundHeight: "35rem",
    marginTop: "5%",
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
    backgroundHeight: "38rem",
    marginTop: "7%",
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
      "No claims for injuries caused during illegal activities or crimes.",
    pageDescription: `Below mentioned are the factors that can affect your health insurance premium amount:`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    column_no: 2,
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
        ],
      },
    ],
  };
  keyOfHealthInsuranceData = {
    pageHeader: "Key Health Insurance Jargons You Should Know",
    pageDescription: `Understanding key health insurance jargons is essential for navigating coverage options effectively.`,
    icon: "../../../../rb_assets/assets/insurance/check-icon.svg",
    column_no: 2,
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
        ],
      },
    ],
  };
  navigatorTabsData = [
    {
      id: 1,
      label: "Best Health Insurance plans in India",
      icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
      altText: "Home Icon",
      link: "'https://www.renewbuy.com/",
    },
    {
      id: 2,
      label: "Family Health Insurance",
      icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
      altText: "Profile Icon",
      link: "'https://www.renewbuy.com/",
    },
    {
      id: 3,
      label: "Compare Health Insurance plans",
      icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
      altText: "Settings Icon",
      link: "'https://www.renewbuy.com/",
    },
    {
      id: 4,
      label: "Find the Best Health Insurance Companies with RenewBuy",
      icon: "../../../../rb_assets/assets/insurance/navigator-icon.svg",
      altText: "Help Icon",
      link: "'https://www.renewbuy.com/",
    },
  ];
  questionsList = [
    {
      question: "How many standalone health insurance companies are in India?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.",
    },
    {
      question: "How many are health insurance companies available in India?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.",
    },
    {
      question:
        "Is there any health insurance company that offers health insurance plans for diabetes?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.",
    },
    {
      question:
        "Is there any health insurance company that offers health insurance plans for diabetes?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.",
    },
    {
      question:
        "What are the top 5 health insurance companies basis on the latest claim settlement ratio?",
    },
    {
      question:
        "How many are public health insurance companies available in India?",
    },
    {
      question:
        "Is expensive health insurance equal to the best health insurance plan?",
    },
    {
      question:
        "Is there any health insurance company in India that covers dental treatment?",
    },
    {
      question: "How to choose a top health insurance company in India?",
    },
    {
      question:
        "How many are private health insurance companies available in India?",
    },
    {
      question:
        "Can I port my health insurance plan from one health insurance company to another?",
    },
  ];
}
