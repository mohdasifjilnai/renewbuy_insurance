import { Component } from '@angular/core';
import { ShareService } from '../../utilis/service/share.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastService } from '../../utilis/service/toast.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss',
})
export class QuickActionsComponent {
  quickLinks: any;
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor(
    private shareService: ShareService,
    private cookieService: CookieService,
    private toastService: ToastService
  ) {
    this.shareService.getQuickActions$.subscribe((data) => {
      this.quickLinks = data;
    });
  }
  navigationByLink(title: any, link: any) {
    if (link != null && title != 'Manage Family') {
      window.location.href = link;
    } else if (title == 'Cashless Garage' || title == 'Cashless Hospital') {
      this.shareService.getTitle(title);
      this.newItemEvent.emit(true);
    }else {
      if (this.cookieService.get('access_token')) {
        if( link != null && title == 'Manage Family'){
          this.shareService.setCrossDomainCookie('isFamilyTab','true' ,7);
          setTimeout(() => {
            window.location.href = link;
          }, 0);
        } else{
          window.location.href = link;
        }
      } else {
        this.shareService.openSignUpModal(true);
      }
    }
  }
}
