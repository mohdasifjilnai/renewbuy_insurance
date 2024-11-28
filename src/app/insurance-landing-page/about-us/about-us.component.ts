import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReadMoreComponent } from '../../modal-components/read-more/read-more.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  readMoreDetails: boolean = false;
  name: any;
  position: any;
  description: any;
  description2: any;
  selectedLeader: any = null;

  businessLeader = [
    {
      image: './rb_assets/assets/images/bala.svg',
      name: 'Balachander Sekhar',
      position: 'Chief Executive Officer',
      description:
        'Bala is an alumnus of IIT Mumbai and IIM Calcutta. He has over 22 Years of experience across various leadership and business roles in FMCG, Banking, and Insurance and has been successful in setting up new businesses from scratch in 2 different organizations.',
      description2:
        'Bala is passionate about technology & innovation and is known to catch market trends early. Before setting up RenewBuy, Bala has been the CMO of PNB MetLife, CEO of Reliance Retail Insurance and Head Bancassurance ABN AMRO.',
    },
    {
      image: './rb_assets/assets/images/neel.svg',
      name: 'Indraneel Chatterjee',
      position: 'Chief Operating Officer',
      description:
        'Indraneel is an alumnus of Symbiosis, Pune. He has over 20 Years of experience in the Product, Pricing, Strategy and Sales domain.',
      description2:
        'He has previously worked as a Product & Strategy Head – MetLife, Business Head – Motor in Reliance Retail Insurance, Product Manager – American Express & Product Manager – ICICI Prudential Life Insurance.',
    },
    {
      image: './rb_assets/assets/images/devesh.svg',
      name: 'Devesh Joshi',
      position: 'Chief Marketing Officer',
      description:
        'Devesh has been a marketing professional for more than 18 years. He studied Mechanical Engineering and completed the Managerial Development Program from IIM (A).',
      description2:
        'He has worked across categories in roles ranging from Business, Marketing & Communication Strategy. He has worked with leading companies like MetLife India, Aviva Life Insurance, JWT (Thompson Connect) and Publicis Group.',
    },
    {
      image: './rb_assets/assets/images/sulbha.svg',
      name: 'Sulbha Rai',
      position: 'Chief People Officer',
      description:
        'Sulbha is Bachelor in Electronics & Communication Engineering, Postgraduate in Business Management.',
      description2:
        'She has more than 13 years of experience in multiple roles within HR at Ernst & Young and has served organizations like Big 4s, Consulting Firms, Start-ups, and SMEs in her career.',
    },
    {
      image: './rb_assets/assets/images/nishant.svg',
      name: 'Nishant Mehta',
      position: 'Chief Business Officer',
      description:
        'Nishant, with over 23 years of experience in Sales / Distribution and Strategy has a Masters in Management along with MDP from IIM (A).',
      description2:
        'His worked with Consumer Durables / Insurance / Media and also been an entrepreneur building his own financial distribution company. He has worked with GE , Aviva, MetLife India, Dainik Bhaskar & Future Generali.',
    },
    {
      image: './rb_assets/assets/images/rahul.svg',
      name: 'Rahul Vermani',
      position: 'Head of Finance',
      description:
        'Rahul comes with more than two decades of experience in the finance domain, with a track record of driving strategic financial leadership and business growth. An alumnus of The Institute of Chartered Accountants of India, he is acclaimed within the industry for implementing robust financial controls, establishing financial frameworks, driving profitability, and ensuring financial stability.',
      description2:
        'His industry experience spans across eminent banks and organizations like HDFC, Axis Bank, Infosys Ltd., FreeCharge Payment Technologies.',
    },
  ];

  readMore(leader: any): void {
    this.selectedLeader = leader;
    this.readMoreDetails = true;
  }

  closeReadMore(): void {
    this.readMoreDetails = false;
    this.selectedLeader = null;
  }
}
