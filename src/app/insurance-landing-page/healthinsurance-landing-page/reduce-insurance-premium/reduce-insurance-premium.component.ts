import { Component, Input } from "@angular/core";

@Component({
  selector: "app-reduce-insurance-premium",
  templateUrl: "./reduce-insurance-premium.component.html",
  styleUrl: "./reduce-insurance-premium.component.scss",
})
export class ReduceInsurancePremiumComponent {
  @Input() page: any;
  heading: any;
  subHeading: any;
  image: any;
  imageRes: any;
  card1Heading: any;
  card2Heading: any;
  card3Heading: any;
  card4Heading: any;
  card5Heading: any;
  card6Heading: any;
  card1SubHeading: any;
  card2SubHeading: any;
  card3SubHeading: any;
  card4SubHeading: any;
  card5SubHeading: any;
  card6SubHeading: any;
  card7Heading: any;
  card7SubHeading: any;
  ngOnChanges() {
    if (this.page?.pageType == "Health") {
      this.heading = `How to reduce Health Insurance Premiums?`;
      this.subHeading = `Reducing health insurance premiums can improve your financial health.
        Though strategies vary by location and insurer, here are some general
        tips to lower premiums:`;
      this.imageRes = `./rb_assets/assets/images/reduce-premium-res.svg`;
      this.image = `./rb_assets/assets/images/reduce-premium.svg`;
      this.card1Heading = `Compare Health Plans`;
      this.card1SubHeading = `Compare plans from various insurers for the best coverage at the
            lowest premium. Use online tools or RenewBuy for help.`;
      this.card2Heading = `Choose a Higher Deductible`;
      this.card2SubHeading = `The deductible is what you pay before insurance starts. Higher
            deductibles lower premiums. Choose based on your health and
            finances.`;
      this.card3Heading = `Access Preventive Care`;
      this.card3SubHeading = `Many plans offer free preventive services like vaccinations &
            checkups, helping to identify health issues early & lower future
            treatment costs.`;
      this.card4Heading = `Assess your Coverage Needs`;
      this.card4SubHeading = `Assess your healthcare needs and select a suitable health plan. If
            you seldom visit the doctor, basic coverage may be more
            cost-effective.`;
      this.card5Heading = `Maintain a Healthy Lifestyle`;
      this.card5SubHeading = `A healthy lifestyle lowers chronic condition risks. Insurers often
            offer discounts for exercise, non-smoking, and healthy weight.`;
      this.card6Heading = `Review Your Plan Annually`;
      this.card6SubHeading = `Review your health insurance plan regularly, as offers and prices
            can change yearly. Compare during open enrollment to find better
            options.`;
    } else if (this.page?.pageType == "Life") {
      this.heading = `How to pick a Life Insurance plan that fits your needs`;
      this.subHeading = `Choosing the right life insurance plan starts with 
        understanding your financial goals, family needs, and budget. Assess policy options to ensure 
        adequate coverage that secures your loved ones' future and aligns with their long-term needs.`;
      this.imageRes = `./rb_assets/assets/images/plan-fits.svg`;
      this.image = `./rb_assets/assets/images/plan-fits.svg`;
      this.card1Heading = `Check the Insurer’s CSR`;
      this.card1SubHeading = `Claim Settlement Ratio indicates the percentage of claims an
        in  urer settles. A higher ratio means the insurer is reliable when it matters most.`;
      this.card2Heading = `Read the Policy Document Thoroughly`;
      this.card2SubHeading = `Take time to understand the terms, conditions, exclusions, 
        and surrender benefits. Don’t hesitate to ask questions or clarify doubts.`;
      this.card3Heading = `Decide the Policy Term`;
      this.card3SubHeading = `Your policy term should align with your financial obligations. 
        For instance, if you want to cover your home loan, the term should match the loan duration.`;
      this.card4Heading = `Compare Premiums`;
      this.card4SubHeading = `Find a policy that balances affordability and coverage. 
        Use online calculators to compare premiums across insurers and ensure you’re getting the best value.`;
      this.card5Heading = `Assess Your Financial Goals`;
      this.card5SubHeading = `Start by understanding why you need life insurance - whether
        it is for income replacement, paying off debts, or securing your child’s education.
          Knowing your goals will help you pick the right type of policy.`;
      this.card6Heading = `Calculate the Coverage You Need`;
      this.card6SubHeading = `A good rule is to have coverage that’s at least 10–15 times 
        your annual income. Consider existing loans, daily expenses, and future milestones before
        deciding on an affordable coverage`;
      this.card7Heading = `Look for Add-Ons (Riders)`;
      this.card7SubHeading = `Enhance your policy with riders like critical illness cover, 
        accidental death benefit, or premium waivers. These add flexibility and additional 
        protection but comes at an additional cost.`;
    }
  }
}
