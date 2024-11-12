import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss',
})
export class NavigatorComponent {
  @Input() navigatorTabsData: any;

  // navigatorTabsData = [
  //   {
  //     id: 1,
  //     label: 'Benefits of Buying Motor Insurance Online?',
  //     icon: '../../../../rb_assets/assets/insurance/navigator-icon.svg',
  //     altText: 'Home Icon',
  //   },
  //   {
  //     id: 2,
  //     label: 'Reasons to Buy Motor Insurance',
  //     icon: '../../../../rb_assets/assets/insurance/navigator-icon.svg',
  //     altText: 'Profile Icon',
  //   },
  //   {
  //     id: 3,
  //     label: 'Renewal Process of Motor Insurance Policy',
  //     icon: '../../../../rb_assets/assets/insurance/navigator-icon.svg',
  //     altText: 'Settings Icon',
  //   },
  //   {
  //     id: 4,
  //     label: 'Process for Filing the Claim Under Motor Insurance',
  //     icon: '../../../../rb_assets/assets/insurance/navigator-icon.svg',
  //     altText: 'Help Icon',
  //   },
  // ];
}
