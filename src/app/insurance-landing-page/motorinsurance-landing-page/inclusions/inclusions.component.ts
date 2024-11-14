import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, Input, PLATFORM_ID } from "@angular/core";

@Component({
  selector: "app-inclusions",
  templateUrl: "./inclusions.component.html",
  styleUrl: "./inclusions.component.scss",
})
export class InclusionsComponent {
  @Input() pageData: any;
  isMobileView: boolean = false;
  backgroundImage: string = "";
  backgroundPosition: any = "";
  isExpanded: boolean = false;
  pageName: any;
  cardData: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.backgroundPosition = "cover";
  }
  ngOnChanges() {
    if (isPlatformBrowser(this.platformId)) {
      this.cardData = JSON.parse(JSON.stringify(this.pageData));
      this.toggleViewMore();
      if (window.innerWidth < 768) {
        this.isMobileView = true;
        this.backgroundImage = this.pageData?.backgroundImageMobileView;
        this.backgroundPosition = this.pageData?.backgroundPosition;
        this.pageName = this.pageData?.pageName;
      } else {
        this.isMobileView = false;
        this.backgroundImage = this.pageData?.backgroundImage;
        this.pageName = this.pageData?.pageName;
      }
    }
  }
  toggleViewMore(){
    if (this.pageData?.isViewMore) {
      if (this.pageData?.cards[0]?.inclusionsData) {
        this.pageData.cards[0].inclusionsData =
          this.pageData.cards[0]?.inclusionsData.slice(0, 6);
      } else {
        this.pageData.cards.inclusionsData = [];
      }
    }else{
      this.pageData = JSON.parse(JSON.stringify(this.cardData));
    }
  }
  expandTable() {
    this.isExpanded = !this.isExpanded;
    this.pageData.isViewMore = !this.isExpanded;
    this.toggleViewMore();
  }
}
