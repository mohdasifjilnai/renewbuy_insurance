import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ShareService } from '../../utilis/service/share.service';
import { ApiService } from '../../utilis/service/api.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiConstants } from '../../utilis/api.constant';

@Component({
  selector: 'app-curated-content',
  templateUrl: './curated-content.component.html',
  styleUrl: './curated-content.component.scss',
})
export class CuratedContentComponent {
  currentIndex = 0;
  tabWidth = 108;
  tags: any;
  blogs: any;
  activeTagIndex = 0; // Default to the first tag
  podcats: any;
  curated_content_length: number = 0;
  @ViewChild('tabsContainer') tabsContainer!: ElementRef;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private apiService: ApiService,
    private sharedService: ShareService
  ) {
    this.checkScreenSize();
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    let url = `${environment['strapiDomain']}${ApiConstants['Curated_tags']}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      this.tags = response?.data;
      this.curated_content_length = this.tags?.length;
      this.blogs = response?.data[0]?.attributes?.blogs?.data;
    });
    this.sharedService.podcatsShareData$.subscribe((data) => {
      this.podcats = data;
    });
  }
  scrollTabs(direction: number): void {
    const maxIndex = this.tabsContainer.nativeElement.children.length - 3;
    this.curated_content_length = maxIndex;
    this.currentIndex = Math.max(
      0,
      Math.min(this.currentIndex + direction, maxIndex)
    );
    this.tabsContainer.nativeElement.style.transform = `translateX(-${
      this.currentIndex * this.tabWidth
    }px)`;
  }
  isSmallScreen: boolean = false;

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth < 1290;
    }
  }

  trackById(index: number, tag: any): number {
    return tag?.id;
  }

  // setActiveTag(index: number): void {
  //   // this.activeTagIndex = index;
  // }
  filterActiveData(tagData: any, id: any, index: any): void {
    this.activeTagIndex = index;
    this.blogs = tagData?.attributes?.blogs?.data;
  }

  redirectToYouTube(link: any) {
    window.location.href = link;

    // window.open(linkl, '_blank');
  }
  redirect(link: any): void {
    window.location.href = link;

    // window.open(link,'_blank');
  }
  slideInterval: any;
  slideDuration = 3000;
  lastSlideTime = 0;
  activeIndex: number = 0;

  goToSlide(index: number) {
    this.activeIndex = index;
    this.resetAutoSlide();
  }
  startAutoSlide() {
    this.lastSlideTime = Date.now();
    this.slideInterval = setInterval(() => {
      this.checkAndSlide();
    }, 100);
  }

  checkAndSlide() {
    const currentTime = Date.now();
    if (currentTime - this.lastSlideTime >= this.slideDuration) {
      this.nextSlide();
      this.lastSlideTime = currentTime;
    }
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.blogs.length;
  }

  resetAutoSlide() {
    this.lastSlideTime = Date.now();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }
}
