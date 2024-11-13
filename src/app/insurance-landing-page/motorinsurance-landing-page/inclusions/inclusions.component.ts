import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-inclusions',
  templateUrl: './inclusions.component.html',
  styleUrl: './inclusions.component.scss',
})
export class InclusionsComponent {
  @Input() pageData: any;
  isMobileView:boolean = false;
  backgroundImage:string= '';
  backgroundPosition:any = '';
  isExpanded:boolean = false;
  pageName:any;
  cardData:any;
  constructor( @Inject(PLATFORM_ID) private platformId: Object){
    this.backgroundPosition = 'cover';
  }
  ngOnChanges(){
    if (isPlatformBrowser(this.platformId)) {
     if(window.innerWidth< 768){
      this.isMobileView = true;
      this.backgroundImage = this.pageData?.backgroundImageMobileView;
      this.backgroundPosition = this.pageData?.backgroundPosition;
      this.pageName = this.pageData?.pageName;
     }else{
      this.isMobileView = false;
      this.backgroundImage = this.pageData?.backgroundImage
      this.pageName = this.pageData?.pageName;
     }
    }
  }
  expandTable(){
    this.isExpanded =!this.isExpanded;
  }
}
