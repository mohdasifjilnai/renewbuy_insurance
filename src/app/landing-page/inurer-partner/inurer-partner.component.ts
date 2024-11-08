import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ShareService } from '../../utilis/service/share.service';
import { isPlatformBrowser } from '@angular/common';
declare var $: any; // Declare jQuery to use it

@Component({
  selector: 'app-inurer-partner',
  templateUrl: './inurer-partner.component.html',
  styleUrl: './inurer-partner.component.scss',
})
export class InurerPartnerComponent {
  insurer_partner: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private shareService: ShareService
  ) {
    this.shareService.ourInsurerPartnersSharedData$.subscribe((data) => {
      this.getAllDataForlandingPage(data);
    });
  }
  getAllDataForlandingPage(response: any) {
    if (response) {
      this.insurer_partner = response;
    }
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $('.slider').slick({
        slidesToShow: 5, // Number of slides visible at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true,
        autoplaySpeed: 0, // Continuous scrolling
        speed: 5000, // Adjust the speed for stream-like flow
        cssEase: 'linear', // Smooth scrolling effect
        infinite: true, // Loop the slides infinitely
        arrows: false, // Hide next/prev arrows
        dots: false, // Hide navigation dots
        responsive: [
          {
            breakpoint: 768, // Mobile view (you can adjust this to the width you prefer)
            settings: {
              slidesToShow: 3, // Show 3 slides on mobile
              slidesToScroll: 1,
            },
          },
        ],
      });
      // $('.slider-card').slick({
      //   slidesToShow: 3, // Show 3 cards at a time
      //   slidesToScroll: 1, // Scroll one card at a time
      //   autoplay: true,
      //   speed: 500, // Adjust scrolling speed
      //   infinite: true, // Loop the cards
      //   centerMode: true, // Center the current slide
      //   centerPadding: '60px', // Control the gap for the left and right cards
      //   arrows: false, // No next/prev arrows
      //   dots: true, // Enable dots for navigation
      //   responsive: [
      //     {
      //       breakpoint: 768, // Mobile view
      //       settings: {
      //         slidesToShow: 1, // Show 3 cards in mobile view
      //         slidesToScroll: 1,
      //         centerPadding: '60px', // Adjust padding/gaps for mobile
      //       },
      //     },
      //   ],
      // });
    }
  }
}
