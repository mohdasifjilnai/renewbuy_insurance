import { Component } from '@angular/core';

@Component({
  selector: 'app-advisor-connect',
  templateUrl: './advisor-connect.component.html',
  styleUrl: './advisor-connect.component.scss',
})
export class AdvisorConnectComponent {
  advisorConnectData = {
    advisorImage:
      '../../../rb_assets/assets/insurance/advisor-connect-icon.svg',
    advisorImageAlt: 'Advisor Image',
    logoImage: '../../../rb_assets/assets/insurance/advisor-connect-logo.svg',
    logoImageAlt: 'Advisor Connect Logo',
    description:
      'Discover tailored insurance quotes from leading companies through our local experts. We offer personalized options to meet your specific needs. Enjoy a free consultation and find the right coverage for you.',
    callToAction: 'Get in touch with us today!',
    buttonText: 'Get Connected',
    buttonIcon: '../../../rb_assets/assets/insurance/Vector.svg',
    buttonIconAlt: 'Arrow Icon',
  };
}
