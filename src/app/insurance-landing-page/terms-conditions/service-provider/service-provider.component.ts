import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-provider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-provider.component.html',
  styleUrl: './service-provider.component.scss',
})
export class ServiceProviderComponent {
  serviceProviderConenantsList = [
    'Service Provider shall render the Services within the stipulated time and as per the terms and conditions agreed.',
    'Service Provider shall render the Services in a diligent, professional and ethical manner using the highest degree/standard of care, expertise and skill, along with performing all ancillary/related tasks that may be reasonably requested by the Company from time to time.',
    'Service Provider shall not assign, commit, execute, bind, or contractually obligate anything to any person/entity on behalf of the Company, without the prior written consent of the Company.',
    'Service Provider shall at all times and at its own expense: (a) strictly comply with all applicable laws; (b) pay all fees and other charges required by such applicable law; and (c) maintain in full force and effect all licenses, permits, authorizations, registrations, and qualification from any authority to the extent necessary to perform its obligations hereunder.',
    'Service Provider hereby agrees and undertakes that the Services provided by the Service Provider shall be to the satisfaction of the Company.',
    'Service Provider agrees that any information given by the Service Provider to the Company will always be true, accurate, correct, complete and up to date, to the best of the Service Provider’s knowledge.',
    'If the Service Provider or its services come under the ambit of Goods & Services Act (“GST”), the Service Provider shall comply with all the requirements of GST law, so that necessary benefit is passed on to the Company.',
  ];
  companyCovenants = [
    'Company shall at all times and at its own expense: (a) strictly comply with all applicable laws,; (b) pay all fees and other charges required by such applicable law; and (c) maintain in full force and effect all licenses, permits, authorizations, registrations and qualification from any authority to the extent necessary to perform its obligations hereunder.',
    'Company shall provide all necessary information/documents to the Service Provider/its staff & personnel in order to enable them to render the Services as per the terms and conditions.',
  ];
  warranties = [
    'It is duly organized and validly existing under the laws of the jurisdiction in which it is established.',
    'Its obligations hereunder constitute legal, valid, binding and enforceable obligations; and',
    'The transactions contemplated herein do not breach its organizational documents or any law, provisions of any contract or order of court applicable to it and do not require any applicable governmental approval.',
  ];
  list = [
    {
      name: '1.',
      content:
        ' Either Party may terminate the Services on the occurrence of any of the following events:',
      subItems: [
        {
          name: '1.1',
          content:
            ' Immediately, if other Party is declared insolvent or bankrupt or is unable to pay its debts or makes a composition with its creditors; or',
        },
        {
          name: '1.2',
          content: ` Immediately, if other Party is dissolved or wound up compulsorily or if an order made or an effective resolution is passed for the winding up of the such Party; or`,
        },
        {
          name: '1.3',
          content: ` In case of any material breach by the other Party, however after giving 15 (fifteen) days prior written notice to the other Party to rectify such breach and the Party in breach is unable .to rectify such breach within such 15 (fifteen) days'time.`,
        },
      ],
    },

    {
      name: '2.',
      content: ` In addition, the services may be terminated by either Party, for convenience, by giving 30 (thirty) days prior written notice to the other Party.`,
    },
    {
      name: '3.',
      content: ` The termination of the services shall not relieve any Party of any obligation or liability accrued prior or after the date of termination.`,
    },
  ];
  IntellectualPropertyList = [
    'Service Provider hereby agrees and understands that without the prior written consent of the Company, the Service Provider and/or its employees, personnel, contractors, agents or any other person empowered/authorised by the Service Provider shall not use the name, brand name, logo, wordmark, trademark, service marks, etc. of the Company or of any of Company’s merchant/client, for any purpose whatsoever including for representation of its clientele base or to publish any promotional or advertising material.',
    'The Parties agree that all the intellectual property already developed and/or owned by each Party as on the date of this Agreement shall continue to vest with the concerned Party.',
    'Nothing contained herein shall authorize the Parties to use, apply, invade or in any manner exploit or infringe the intellectual property rights of the other Party, without prior consent of the other Party. In addition, the Parties undertake not to infringe the intellectual property rights of any third party.',
  ];
}
