import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../utilis/service/api.service';
import { MetaService } from '../utilis/service/meta.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiConstants } from '../utilis/api.constant';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-insurance-landing-page',
  templateUrl: './insurance-landing-page.component.html',
  styleUrl: './insurance-landing-page.component.scss',
})
export class InsuranceLandingPageComponent {
  constructor(
    private apiService: ApiService,
    private meta: MetaService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    let url = `${environment['strapiDomain']}${ApiConstants['INSURANCE_HOME']}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      this.meta.updateMeta(
        response?.data?.attributes?.seo?.metaTitle,
        response?.data?.attributes?.seo?.metaDescription,
        response?.data?.attributes?.seo?.keywords,
        response?.data?.attributes?.seo?.canonicalURL
      );
    });
  }


  scrollToCashlessGarages(event: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      if (event) {
        if (window.innerWidth <= 768) {
          window.scrollTo({
            top: document.body.scrollHeight / 3.8,
            behavior: 'smooth',
          });
        } else {
          window.scrollTo({
            top: document.body.scrollHeight / 3,
            behavior: 'smooth',
          });
        }
      }
    }
  }
}
