import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../utilis/service/api.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiConstants } from '../../utilis/api.constant';
import { ShareService } from '../../utilis/service/share.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  expandedSections: { [key: string]: boolean } = {};
  currentOpenSection: string | null = null;
  currentYear: number | undefined;
  footer_links: any;
  isBrowser: any;
  isMainPage: boolean = true;
  constructor(
    private apiService: ApiService,
    private sharedService: ShareService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.currentYear = new Date().getFullYear();
    const footer = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    if (isPlatformBrowser(this.platformId)) {
      let param = '';
      // if (
      //   window.location.href == environment['renewbuyInsuranceDomain'] ||
      //   window.location.href == 'http://test.rbstaging.in/renewbuy-insurance'
      // ) {
        param = `?sort=id:asc&populate[footer_tags][filters][is_broking][$eq]=true&populate[footer_tags][sort]=id:asc&populate[footer_tags][populate]=links`;
        this.isMainPage = false;
      // } else {
      //   param = `?sort=id:asc&populate[footer_tags][filters][is_consulting][$eq] = true&populate[footer_tags][sort]=id:asc&populate[footer_tags][populate]=links`;
      //   this.isMainPage = true;
      // }

      let url = `${environment['strapiDomain']}${ApiConstants['Footer']}${param}`;
      this.apiService
        .getRequestedResponse(url, footer)
        .subscribe((response) => {
          this.footer_links = response?.data;
        });
    }
  }

  toggleFooterLinks(section: string): void {
    if (this.currentOpenSection === section) {
      this.expandedSections[section] = false;
      this.currentOpenSection = null;
    } else {
      if (this.currentOpenSection) {
        this.expandedSections[this.currentOpenSection] = false;
      }
      this.expandedSections[section] = true;
      this.currentOpenSection = section;
    }
  }

  getIconSrc(section: string): string {
    return this.expandedSections[section]
      ? '../../../../rb_assets/assets/images/faq-expand-icon.svg'
      : '../../../../rb_assets/assets/images/footer-icon.svg';
  }
  redirect(link: string): void {
    if (link != null) {
      window.location.href = link;
    }
  }
}
