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
      Health insurance is also known as medical insurance. A health insurance plan is a contract between the insurance company and the policyholder in which the health insurance company provides you with financial coverage against medical expenses incurred due to accident, critical illness, minor or major injuries, etc.
    </p>
    <p class="decsription-text">
      Policyholders need to pay a pre-determined amount (health insurance premium) to avail the coverage <span class="link-text">benefits of a health insurance</span> policy. A health insurance plan offers various coverage benefits such as pre and post-hospitalization, home hospitalization, coverage for daycare treatment, annual medical check-up, etc.
    </p>`,
    },
  ];
  inclusionsData = {
    pageHeader:
      "Ensure superior health insurance that delivers peace of mind with top-tier benefits.",
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
            text: "Choose from a diverse range of health plans tailored to your needs and budget, ensuring comprehensive coverage & peace of mind.",
          },
          {
            title: "Quick Grievance Redressalt",
            text: "Experience swift grievance redressal processes that prioritise your concerns, ensuring efficient resolutions & customer satisfaction.",
          },
          {
            title: "Easy Claim Settlement Process",
            text: "Benefit from a hassle-free claim settlement process designed for simplicity and speed, ensuring quick reimbursement & minimal paperwork.",
          },
        ],
      },
      {
        cardHeader: "",
        inclusionsData: [
          {
            title: "Flexible Premium Payment Option",
            text: "Enjoy the flexibility of premium payment options that suit your financial planning, making it easier to manage your health insurance expenses.",
          },
          {
            title: "Renewal Benefits",
            text: "Access renewal benefits that reward your loyalty with enhanced coverage or discounts, ensuring continued protection & value.",
          },
          {
            title: "Portability Option Available",
            text: "Access renewal benefits that reward your loyalty with enhanced coverage or discounts, ensuring continued protection & value.",
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
    backgroundHeight: "40rem",
    marginTop: "10%",
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
    pageHeader: "No claims for injuries caused during illegal activities or crimes.",
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
  questionsList = [
    {
      question: "How is Motor Insurance Premium calculated?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.",
    },
    {
      question: "What is the validity period of a Motor Insurance Policy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.",
    },
    {
      question: "What documents are needed to file a Motor Insurance Claim?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.",
    },
    {
      question:
        "If I lose my Vehicle Insurance Policy, can I get a duplicate one?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus, optio fugit alias ad veniam. At omnis accusantium reprehenderit suscipit qui sapiente earum, non nostrum quas similique minus, placeat ullam.",
    },
    { question: "Is Motor Insurance Renewal possible online?" },
    { question: "Is GST levied on Motor Insurance Premiums?" },
    { question: "What is IDV (Insured Declared Value)?" },
    { question: "Is GST levied on Motor Insurance Premiums?" },
    {
      question:
        "How can I get a discount on my Motor Insurance Policy Premium?",
    },
    { question: "Is it beneficial to buy Motor Insurance Online?" },
    { question: "For how long is the NCB on a policy valid?" },
  ];
}
