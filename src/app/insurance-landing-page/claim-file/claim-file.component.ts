import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-claim-file',
  templateUrl: './claim-file.component.html',
  styleUrl: './claim-file.component.scss',
})
export class ClaimFileComponent {
  isMobileView: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  claimSteps = [
    {
      icon: '../../../rb_assets/assets/insurance/intimation.svg',
      iconAlt: 'Intimation Icon',
      icon_background: 'intimation-icon',
      number: '01',
      title: 'Intimation',
      description: 'Intimate your claim instantly with a few simple clicks.',
    },
    {
      icon: '../../../rb_assets/assets/insurance/expert-consultant.svg',
      iconAlt: 'Expert Consultation Icon',
      number: '02',
      icon_background: 'intimation-icon, expert-icon',
      title: 'Expert Consultation',
      description:
        "Get expert advice from our team. We're here to guide you through the process.",
    },
    {
      icon: '../../../rb_assets/assets/insurance/tracking.svg',
      iconAlt: 'Tracking Icon',
      number: '03',
      icon_background: 'intimation-icon, tracking-icon',
      title: 'Tracking',
      description:
        "Track your claim's progress in real-time. Stay informed every step of the way.",
    },
    {
      icon: '../../../rb_assets/assets/insurance/settlement.svg',
      iconAlt: 'Settlement Icon',
      number: '04',
      icon_background: 'intimation-icon, claim-icon ',
      title: 'Settlement',
      description:
        'Enjoy a hassle-free settlement process. Get your compensation quickly & efficiently.',
    },
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $('.slider-card-banner').slick({
        slidesToShow: 3, // Show 3 cards at a time
        slidesToScroll: 1, // Scroll one card at a time
        autoplay: false,
        speed: 500, // Adjust scrolling speed
        infinite: true, // Loop the cards
        centerMode: true, // Center the current slide
        centerPadding: '60px', // Control the gap for the left and right cards
        arrows: false, // No next/prev arrows
        dots: false, // Enable dots for navigation
        responsive: [
          {
            breakpoint: 768, // Mobile view
            settings: {
              slidesToShow: 1, // Show 3 cards in mobile view
              slidesToScroll: 1,
              centerPadding: '60px', // Adjust padding/gaps for mobile
            },
          },
        ],
      });
    }
  }
}
