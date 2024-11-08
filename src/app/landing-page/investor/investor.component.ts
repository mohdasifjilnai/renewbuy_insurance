import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ShareService } from '../../utilis/service/share.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss'], // Using styleUrls ensures scoped styles
})
export class InvestorComponent implements AfterViewInit {
  investors: any[] = [];
  slideTrackWidth: string = '0px'; // Dynamically adjust width
  @ViewChild('slideTrack', { static: false }) slideTrack!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sharedService: ShareService
  ) {
    // Fetch investors data
    this.sharedService.investorsShareData$.subscribe((data) => {
      this.investors = data;
      this.calculateSlideTrackWidth();
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Calculate the width once the investors data is available
      this.calculateSlideTrackWidth();
    }
  }

  calculateSlideTrackWidth(): void {
    // Calculate the width based on the number of items, assuming 160px per slide
    const numSlides = this.investors?.length * 2; // Double the slides for seamless scroll
    this.slideTrackWidth = `${160 * numSlides}px`;
  }

  // Functions to pause and resume the scrolling on hover
  pauseCarousel(): void {
    const track = this.slideTrack.nativeElement;
    track.style.animationPlayState = 'paused';
  }

  resumeCarousel(): void {
    const track = this.slideTrack.nativeElement;
    track.style.animationPlayState = 'running';
  }
  redirect(link: string): void {
    if(link != null){
      window.location.href=link;
    }
  }
}
