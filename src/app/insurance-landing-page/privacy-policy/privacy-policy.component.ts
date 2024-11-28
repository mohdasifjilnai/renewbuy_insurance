import { Component } from "@angular/core";

@Component({
  selector: "app-privacy-policy",
  templateUrl: "./privacy-policy.component.html",
  styleUrl: "./privacy-policy.component.scss",
})
export class PrivacyPolicyComponent {
  privacyPageData = {
    pageHeading: "Privacy Policy",
    pageDescription: `This Privacy Policy sets out how the information provided by you is collected, used, stored, processed, transferred and protected. Please read the terms carefully. By accessing the Website or using any of our services, You agree to be bound by all the terms of this Privacy Policy.`,
    pageImageSrc: "../../../../rb_assets/assets/images/privacy-policy.svg",
  };
  purposeList = [
    "For issuance of the insurance policy that you have opted for.",
    "For providing information about various products and services.",
    "For addressing queries put forth by you and for resolving the concerns pertaining to any service or product.",
    "For processing your transactions and also to provide you transaction and post transaction-related services.",
    "For providing, improving, and marketing our products and services, including site content and performance.",
    "For sending you survey and marketing communications.",
    "For facilitating various programmes and initiatives launched either by us or third party which we believe may be of an interest to you.",
    "For facilitating usage of our Website/App.",
    "For improving our services, product or content on our Website/App.",
    "For providing group insurance cover and wellness corner offerings.",
    "For providing health and wellness related information to you that are offered by insurer.",
    "For sending notices, communications, offer alerts and to contact you over the telephone/mobile number and/or e-mail address provided by you for sending information of our products in which you have shown your interest, policy renewal reminders, other service details and other general information about insurance.",
    "For appointment as Point of Salesperson /employee.",
    "For payment of salary/commission earned and related circumstances therein.",
  ];
  persionalInformationList = [
    "Name",
    "User ID",
    "Email address",
    "Address (including country and ZIP/postal code)",
    "Gender",
    "Age",
    "Phone Number",
    "Password chosen by the User",
    "Geographical location through the IP address of the Users",
    "Financial account information like bank account details, GST certificate, PAN Card, etc. and transactional information in relation to transactions where the Company is involved",
    "Any of the aforesaid information pertaining to the customer/buyer of the User",
    "All other personally identifiable information/details as the User may share from time to time (including personally identifiable information/details of the customer/buyer of the User)",
  ];
  autoMationDataCollection = [
    "We do not knowingly collect Personal Information from children; and",
    "We may in future include other optional requests for information from the User including through User surveys in order to help Us customize the Platform to deliver personalized information to the User and for other purposes as mentioned herein. Such information may also be collected in the course of surveys/contests conducted by Us. Any such additional Personal Information will also be processed in accordance with this Privacy Policy.",
  ];
  activitiesList = [
    "Registration of the User on the Platform",
    "Processing the User’s orders/requests and provision of various Services by us and our holding / subsidiary / associates",
    "Sending OTPs and / or timely / periodical updates to the User and its customers through mobile / WhatsApp / sms / other communication medium",
    "Using mobile number to fetch information from third parties to whom you have given consent to that effect",
    "Completing transactions with Users effectively and billing for the products/Services provided",
    "Technical administration and customization of Platform",
    "Ensuring that the Platform content is presented to the Users in an effective manner",
    "Delivery of personalized information and targeted as well as non-targeted advertisements by the Company to the User",
    "Improvement of Services, features and functionality of the Platform",
    "Research and development and for User administration (including conducting user surveys)",
    "For purposes of research, analysis, business intelligence, reporting and improvement/development/advancement of the Company’s business, Platform and/or the Services",
    "Dealing with requests, enquiries, complaints or disputes and other customer care related activities including those arising out of the Users’ request of the Services and all other general administrative and business purposes",
    "Communicate any changes in our Services or this Privacy Policy or the Terms of Use to the Users",
    "Verification of identity of Users and to perform checks to prevent frauds",
    "Investigating, enforcing, resolving disputes and applying our Terms of Use and Privacy Policy, either ourselves or through third party service providers",
    "To comply with applicable legal requirements and our various policies/terms",
    "Any other purpose that may be necessary to provide the Services that you have opted for",
  ];
  disclosurelist = [
    "Under the laws, rules, and regulations and/or under orders of any relevant judicial or quasi-judicial authority",
    "To protect and defend the rights or property of the Company",
    "To fight fraud and credit risk",
    "To enforce the Company's Terms of Use (to which this Privacy Policy is also a part); or",
    "When the Company, in its sole discretion, deems it necessary in order to protect its rights or the rights of others.",
  ];
  securityMeasureslist = [
    "The information collected by Us is stored on servers that are secured behind a firewall. Further, the access to the servers is password-protected and strictly controlled.",
    "All information transmitted to and from Our server is fully encrypted.",
    "The data that is passed in APIs is passed over secure TLS based http connection.",
    "We do not store any payment or cards related information on Our servers. Your data stored in Our systems is not visible to anyone.",
    "We are ISO 27001:2013 certified.",
    "The system architecture isolates your activity to ensure that any Company associates cannot view your information without your permission.",
  ];
  consentList = [
    "Consent of prospects/customers: Consent of the customer is taken on the proposal form/ through acceptance of the terms and conditions of our App or Website.",
    "Consent of Partners: Consent of the Partner is obtained at the time of joining the company or accepting the terms and conditions of our App or Website during enrolling stage.",
    "Consent of Vendors/Suppliers: Consent of the vendor/supplier is obtained through signed written contracts along with supporting legal documents like affidavits.",
    "Consent of the Employees: Consent of an employee is obtained through the forms filled up by an employee at the time of joining through the joining documents and/ or through self-attested testimonials and other KYC documentation.",
  ];
  consentSpecifiedList = [
    "Vendors have the right to choose to terminate the contract or modify the terms of the contract as mutually agreed upon by the Company and the vendor.",
    "Partners can drop the decision to become a Partner or after becoming a Partner, request for termination can be made and NOC can be taken from Us with respect to the same.",
    "Employee has the option to not join the Company or if the employee has joined the Company, he/she can modify the information submitted to Us.",
  ];
  emailAddress = "data-grievance@renewbuy.com";
  informationList = [
    "Personal Information that will mean and include all kind of information which can be linked to a specific individual or to identify any individual, directly or indirectly, such as name, age, address, contact details (phone numbers/ email address), date of birth.",
    "Clickstream data that includes information about your interaction with various elements of our Website and App.",
    "If appropriate permissions are provided by you, we collect the GPS location on various platforms that you use the service on App/Website. Location might be collected at certain times that might depend on your App/Website usage or the time of the day.",
    "Vehicle information whenever opting for motor insurance.",
    "Health and lifestyle information which is collected only as per the requirements of the insurer to underwrite the proposal as per the guidelines of Insurance Regulatory and Development Authority of India (“IRDAI”) for health & life insurance.",
    "Health and lifestyle related questions/information, which are mandated by the insurance company for the purpose of issuing insurance policy.",
    "Details required in a KYC document which is the mandatory document as per the guidelines of IRDAI.",
    "Documentary proof/information of educational qualifications, wherever applicable",
    "Financial data including bank account number, IFSC Code.",
    "Constitution details of a vendor including without limitation, name, office address, Articles of Assocation.",
    "Biometric Information, wherever applicable.",
  ];
  verificationList = [
    "For the purpose of joining of the employee and for validation of the details of the curriculum vitiate.",
    "For bank account details will be used for the purpose of salary/commission credit to employees/POSP and for payment to vendors/suppliers.",
    "For biometric information for attendance purposes.",
    "To improve our products and enhance customer service.",
    "To extend services or administer a contest, promotion, survey or other site or business feature.",
    "For Aadhaar authentication and sharing, storing, using Aadhaar data",
    "For sales and marketing Activities",
    "Allow you to access specific account information.",
    "To process transactions, where requested, under your User ID and PasswordAll the data/information collected may be stored on the infrastructure provided by third party cloud service in India which is fully compliant with regulatory requirements within. No information/data that is collected ever goes out of India.",
  ];
   listContent = [
    "For the purpose of facilitating sale and servicing of insurance products to you, as an insurance broker, we provide your personal information to the insurers that are chosen by you on the App or Website.",
    "Otherwise than stated in clause 4f herein below, we do not share or disclose the information to any other individual/institutions and their subsidiaries/associates/holding company/subsidiaries companies/group companies/affiliates, tie-up institutions etc. for any purpose unless such a disclosure is explicitly authorised by you.",
    "Where information collected by us is required to be disclosed to comply with any applicable law, regulation and legal process; in response to law enforcement authority or other governmental official request; to detect, prevent, or otherwise address fraud, cyber incidents, prosecution, and punishment of offences; for security or technical issues; to investigate a complaint or security threat and for any public interests.",
    "For marketing purpose but only under circumstances where you have specifically authorized or consented for the same.",
    "Where we are required to disclose the information as a part of any statutory obligation to IRDAI or any other statutory authority.",
    "We may share and/or transfer your information to any of our Affiliate, holding/subsidiaries/group companies and/or insurers. Our affiliates, holding/subsidiaries/group companies may also from time to time send by e-mail or otherwise, information relating to their products or services.",
    "We may also share and/or transfer your information to any successor-in-interest as a result of a sale of any part of our business or upon the merger, reorganization or consolidation of DIBPL with another entity on the basis that DIBPL is not the surviving entity.",
    "We may share personal information with our other corporate entities and affiliates to help us operate our business and the Site or administer activities such as detection of identity theft, fraud and other potentially illegal acts, to facilitate joint or co-branded services that you request where such services are provided by more than one corporate entity. We may share your information with these third parties for those limited purposes provided that you have given us your permission."
];
 rightsList = [
  "You have the right to Access your personal data held about you and to learn the origin of the data, the purposes and means of the processing, the details of the data controller(s), the data processor(s) and the parties to whom the data may be disclosed;",
  "Withdraw your consent at any time where your personal data is processed with your consent;",
  "Update and correct your personal data so that it is accurate;",
  "Delete your personal data from our records if it is no longer needed;",
  "Restrict the processing of your personal data in certain circumstances, e.g. where you have contested the accuracy of your personal data, for the period enabling us to verify its accuracy;",
  "Obtain your personal data in an electronic format;",
  "File a complaint with us and/or the relevant data grievance officer; and",
  "Object to us processing your personal data, or tell us to stop processing it (including for purposes of direct marketing, survey etc)"
];
 securityDetails = [
  "The information collected by us is stored on servers that are secured behind a firewall. Further, the access to the servers is password-protected and is strictly limited.",
  "All information transmitted to and from our server is fully encrypted.",
  "The data that is passed in APIs is passed over secure TLS based HTTP connection.",
  "We do not store any payment or cards related information on our servers. Your data stored in our systems is not visible to anyone.",
  "We are ISO27001:2013 certified.",
  "The system architecture isolates insurer code to ensure that there is no possibility of cross-talk between insurer systems.",
  "All the communication with insurer is push-based, i.e., only required information is pushed to the insurer system. Insurer cannot pull out data from the system of RenewBuy.",
  "Each proposal and the transaction that is done is tagged to a customer and agent through an email ID which is then protected by a password. A policy will be accessible only to an agent or the customer.",
  "Your personal information in RenewBuy account is not visible to anyone. End-to-end encryption is used to transmit data between all entities, to protect against network vulnerabilities."
];
 consentDetails = [
  "Consent of prospects/customers: Consent of the customer is taken on the proposal form/ through acceptance of the terms and conditions of our App or website.",
  "Consent of Partners/POSP: Consent of the Partner/POSP is obtained through execution of the agreement with the Company/acceptance of the terms and conditions of our App or website during enrolling stage.",
  "Consent of Vendors/Suppliers: Consent of the vendor/supplier is obtained by execution of the agreement with the Company and through various others self-attested documents/questionnaire.",
  "Consent of the Employees: Consent of an employee is obtained through the forms filled up by an employee at the time of joining through the joining documents and/or through self-attested testimonials and other KYC documentation."
];

}
