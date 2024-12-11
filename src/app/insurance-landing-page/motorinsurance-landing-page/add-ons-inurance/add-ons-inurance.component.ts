import { Component, Input, SimpleChange } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-add-ons-inurance',
  templateUrl: './add-ons-inurance.component.html',
  styleUrl: './add-ons-inurance.component.scss',
})
export class AddOnsInuranceComponent {
  @Input() pageData: any;
  cardData:any;
  pageHeader: any;
  pageDescriptions: any;
  pageName:any
  addOnsHead:any;
  addOnSubHead:any;
  insuranceLink = environment.renewbuyInsuranceDomain;
  homePageRoute = environment.mainDomain;
  breadCrumb:any;

  constructor() {}
  ngOnChanges() {
    this.pageHeader = this.pageData[0]?.pageHeader;
    this.pageDescriptions = this.pageData[0]?.pageDescriptions;
    this.cardData = this.pageData[0]?.addOnsPageCardData;
    this.pageName = this.pageData[0]?.pageName;
    this.addOnsHead = this.pageData[0]?.addOnsHead;
    this.addOnSubHead = this.pageData[0]?.addOnSubHead;
    
    if(this.pageName === 'motor'){
      this.breadCrumb = "Motor";
    }else if(this.pageName === 'health'){
      this.breadCrumb = "Health";
    }else if(this.pageName === 'life'){
      this.breadCrumb = "Life";
    }
  }
  // cardData = [
  //   {
  //     id: 1,
  //     heading: 'Zero Depreciation',
  //     imageSrc: '../../../../rb_assets/assets/insurance/zero-depreciation.svg',
  //     text: 'This addition ensures the motor insurance company settles claims without depreciation costs, leading to a higher payout and greater financial protection for you.',
  //   },
  //   {
  //     id: 2,
  //     heading: 'Assistance on the Road',
  //     imageSrc: '../../../../rb_assets/assets/insurance/assistance-road.svg',
  //     text: 'If you find yourself stranded on the road, this add-on cover provides roadside assistance, including towing services, from the motor insurance company.',
  //   },
  //   {
  //     id: 3,
  //     heading: 'Engine Protection',
  //     imageSrc: '../../../../rb_assets/assets/insurance/engine.svg',
  //     text: "This add-on protects your vehicle's engine, one of the most crucial components, a key addition to motor insurance.",
  //   },
  //   {
  //     id: 4,
  //     heading: 'NCB Cover',
  //     imageSrc: '../../../../rb_assets/assets/insurance/ncb-cover.svg',
  //     text: 'If your car keys get stolen, damaged, or lost, this add-on cover will help you cover the cost of the key.',
  //   },
  //   {
  //     id: 5,
  //     heading: 'Key Replacement Cover',
  //     imageSrc:
  //       '../../../../rb_assets/assets/insurance/key-replacement-cover.svg',
  //     text: 'If your car keys get stolen, damaged, or lost, this add-on cover will help you cover the cost of the key.',
  //   },
  //   {
  //     id: 6,
  //     heading: 'PA Cover',
  //     imageSrc: '../../../../rb_assets/assets/insurance/pa-cover.svg',
  //     text: 'In India, PA Cover is mandatory alongside third-party car insurance. It provides financial protection in the event of death or permanent disability while driving.',
  //   },
  //   {
  //     id: 7,
  //     heading: 'PA Cover for Riders',
  //     imageSrc: '../../../../rb_assets/assets/insurance/pa-cover-rider.svg',
  //     text: 'You may protect your loved ones in the event of a permanent disability or death while riding a vehicle when you purchase this add-on cover.',
  //   },
  // ];
}
