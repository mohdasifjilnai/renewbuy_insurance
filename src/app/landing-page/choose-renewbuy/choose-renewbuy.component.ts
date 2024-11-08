import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../utilis/service/api.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { ShareService } from '../../utilis/service/share.service';
declare var $: any; // Declare jQuery to use it

@Component({
  selector: 'app-choose-renewbuy',
  templateUrl: './choose-renewbuy.component.html',
  styleUrl: './choose-renewbuy.component.scss',
})
export class ChooseRenewbuyComponent {
  currentIndex: number = 0;
  isExpanded = false;
  insurer_partner: any;
  custome_stories: any;
  banner: any;
  isSign: boolean = false;
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
      $('.slider-card').slick({
        slidesToShow: 3, // Show 3 cards at a time
        slidesToScroll: 1, // Scroll one card at a time
        autoplay: true,
        speed: 500, // Adjust scrolling speed
        infinite: true, // Loop the cards
        centerMode: true, // Center the current slide
        centerPadding: '60px', // Control the gap for the left and right cards
        arrows: false, // No next/prev arrows
        dots: true, // Enable dots for navigation
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
