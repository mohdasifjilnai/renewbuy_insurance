import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

const DEFAULT = {
  title: 'Angular SSR does not update meta tag when fetch data from an API',
  description:
    'Angular SSR does not update meta tag when fetch data from an API',
  imgUrl: `https://www.renewbuy.com/sites/default/files/2022-12/social-share.jpg`,
  keywords: 'Angular, SSR, API Fetching',
  canonicalURL: 'https://www.renewbuy.com/',
  imageDimension: { default: 256, og: 512 }, // og for Facebook rule is min size of image 200 x 200
};
@Injectable({
  providedIn: 'root',
})
export class MetaService {
  dom = inject(DOCUMENT);
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  /**
   * Update meta tag for page.
   * @param title Meta tag title
   * @param desc Meta tag description
   * @param imgUrl Meta tag image
   * @param options Options for SEO.
   */
  updateMeta(
    title: string = DEFAULT.title,
    desc: string = DEFAULT.description,
    keywords: string = DEFAULT.keywords,
    canonicalURL: string = DEFAULT.canonicalURL,
    imgUrl: string = DEFAULT.imgUrl,
    options: any = {}
  ): void {
    const titleName = title === DEFAULT.title ? title : title;
    const path = this.router.url;
    let socialImgUrl = imgUrl;
    let ogImgUrl = imgUrl;
    this.meta.updateTag({
      name: 'description',
      content: desc,
    });
    this.title.setTitle(titleName);
    this.meta.updateTag({ property: 'og:site_name', content: titleName });
    this.meta.updateTag({ property: 'og:title', content: titleName });
    this.meta.updateTag({ property: 'og:image:alt', content: titleName });
    this.meta.updateTag({
      property: 'og:description',
      content: desc,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: ogImgUrl,
    });
    this.meta.updateTag({
      property: 'og:image:secure_url',
      content: ogImgUrl,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: '' + path,
    });
    this.meta.updateTag({ name: 'twitter:title', content: titleName });
    this.meta.updateTag({
      property: 'description',
      content: desc,
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: desc,
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: socialImgUrl,
    });
    this.meta.updateTag({
      name: 'twitter:image:src',
      content: socialImgUrl,
    });
    this.meta.updateTag({
      name: 'twitter:url',
      content: '' + path,
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: keywords,
    });

    let canonical = this.dom.querySelector('link[rel=canonical]');
    if (!canonical) {
      canonical = this.dom.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(canonical);
    }
    canonical.setAttribute('href', '' + canonicalURL);
  }
}
