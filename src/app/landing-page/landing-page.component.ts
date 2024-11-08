import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiService } from '../utilis/service/api.service';
import { MetaService } from '../utilis/service/meta.service';
import { ApiConstants } from '../utilis/api.constant';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private apiService: ApiService, private meta: MetaService) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    let url = `${environment['strapiDomain']}${ApiConstants['Home']}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      // console.log(
      //   response?.data?.attributes?.seo,
      //   'response?.data?.attributes?.seo'
      // );
      this.meta.updateMeta(
        response?.data?.attributes?.seo?.metaTitle,
        response?.data?.attributes?.seo?.metaDescription,
        response?.data?.attributes?.seo?.keywords,
        response?.data?.attributes?.seo?.canonicalURL
      );
    });
  }
}
