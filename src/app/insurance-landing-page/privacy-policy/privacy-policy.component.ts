import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  privacyPageData = {
    pageHeading: 'Privacy Policy',
    pageDescription: `This Privacy Policy sets out how the information provided by you is collected, used, stored, processed, transferred and protected. Please read the terms carefully. By accessing the Website or using any of our services, You agree to be bound by all the terms of this Privacy Policy.`,
    pageImageSrc: '../../../../rb_assets/assets/images/privacy-policy.svg',
  };
  purposeList = [
    'The type of Personal Information (including Sensitive Personal Data or Information) that we collect from the Users',
    'The purpose of collection, means and modes of usage of such Personal Information by the Company',
    'How and to whom the Company can disclose such information',
    'How the Company will protect the Personal Information including Sensitive Personal Data or Information that is collected from the Users',
    'How Users may access and/or modify their Personal Information',
  ];
  persionalInformationList = [
    'Name',
    'User ID',
    'Email address',
    'Address (including country and ZIP/postal code)',
    'Gender',
    'Age',
    'Phone Number',
    'Password chosen by the User',
    'Geographical location through the IP address of the Users',
    'Financial account information like bank account details, GST certificate, PAN Card, etc. and transactional information in relation to transactions where the Company is involved',
    'Any of the aforesaid information pertaining to the customer/buyer of the User',
    'All other personally identifiable information/details as the User may share from time to time (including personally identifiable information/details of the customer/buyer of the User)',
  ];
  autoMationDataCollection = [
    'We do not knowingly collect Personal Information from children; and',
    'We may in future include other optional requests for information from the User including through User surveys in order to help Us customize the Platform to deliver personalized information to the User and for other purposes as mentioned herein. Such information may also be collected in the course of surveys/contests conducted by Us. Any such additional Personal Information will also be processed in accordance with this Privacy Policy.',
  ];
  activitiesList = [
    'Registration of the User on the Platform',
    'Processing the User’s orders/requests and provision of various Services by us and our holding / subsidiary / associates',
    'Sending OTPs and / or timely / periodical updates to the User and its customers through mobile / WhatsApp / sms / other communication medium',
    'Using mobile number to fetch information from third parties to whom you have given consent to that effect',
    'Completing transactions with Users effectively and billing for the products/Services provided',
    'Technical administration and customization of Platform',
    'Ensuring that the Platform content is presented to the Users in an effective manner',
    'Delivery of personalized information and targeted as well as non-targeted advertisements by the Company to the User',
    'Improvement of Services, features and functionality of the Platform',
    'Research and development and for User administration (including conducting user surveys)',
    'For purposes of research, analysis, business intelligence, reporting and improvement/development/advancement of the Company’s business, Platform and/or the Services',
    'Dealing with requests, enquiries, complaints or disputes and other customer care related activities including those arising out of the Users’ request of the Services and all other general administrative and business purposes',
    'Communicate any changes in our Services or this Privacy Policy or the Terms of Use to the Users',
    'Verification of identity of Users and to perform checks to prevent frauds',
    'Investigating, enforcing, resolving disputes and applying our Terms of Use and Privacy Policy, either ourselves or through third party service providers',
    'To comply with applicable legal requirements and our various policies/terms',
    'Any other purpose that may be necessary to provide the Services that you have opted for',
  ];
  disclosurelist = [
    'Under the laws, rules, and regulations and/or under orders of any relevant judicial or quasi-judicial authority',
    'To protect and defend the rights or property of the Company',
    'To fight fraud and credit risk',
    "To enforce the Company's Terms of Use (to which this Privacy Policy is also a part); or",
    'When the Company, in its sole discretion, deems it necessary in order to protect its rights or the rights of others.',
  ];
  securityMeasureslist = [
    'The information collected by Us is stored on servers that are secured behind a firewall. Further, the access to the servers is password-protected and strictly controlled.',
    'All information transmitted to and from Our server is fully encrypted.',
    'The data that is passed in APIs is passed over secure TLS based http connection.',
    'We do not store any payment or cards related information on Our servers. Your data stored in Our systems is not visible to anyone.',
    'We are ISO 27001:2013 certified.',
    'The system architecture isolates your activity to ensure that any Company associates cannot view your information without your permission.',
  ];
  consentList = [
    'Consent of prospects/customers: Consent of the customer is taken on the proposal form/ through acceptance of the terms and conditions of our App or Website.',
    'Consent of Partners: Consent of the Partner is obtained at the time of joining the company or accepting the terms and conditions of our App or Website during enrolling stage.',
    'Consent of Vendors/Suppliers: Consent of the vendor/supplier is obtained through signed written contracts along with supporting legal documents like affidavits.',
    'Consent of the Employees: Consent of an employee is obtained through the forms filled up by an employee at the time of joining through the joining documents and/ or through self-attested testimonials and other KYC documentation.',
  ];
  consentSpecifiedList = [
    'Vendors have the right to choose to terminate the contract or modify the terms of the contract as mutually agreed upon by the Company and the vendor.',
    'Partners can drop the decision to become a Partner or after becoming a Partner, request for termination can be made and NOC can be taken from Us with respect to the same.',
    'Employee has the option to not join the Company or if the employee has joined the Company, he/she can modify the information submitted to Us.',
  ];
  emailAddress = 'data-grievance@renewbuy.com';
}
