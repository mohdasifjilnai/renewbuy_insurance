import { Component } from '@angular/core';
import { ApiService } from '../../utilis/service/api.service';
import { MetaService } from '../../utilis/service/meta.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiConstants } from '../../utilis/api.constant';

@Component({
  selector: 'app-motorinsurance-landing-page',
  templateUrl: './motorinsurance-landing-page.component.html',
  styleUrl: './motorinsurance-landing-page.component.scss'
})
export class MotorinsuranceLandingPageComponent {
  constructor(private apiService: ApiService, private meta: MetaService) {
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
}
