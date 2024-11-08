import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.scss',
})
export class CookieConsentComponent {
  isVisible: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if the user has already made a choice
    if (isPlatformBrowser(this.platformId)) {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (cookieConsent) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
    }
  }

  acceptCookies(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', 'accepted');
      this.isVisible = false;
    }
  }

  rejectCookies(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', 'accepted');
      this.isVisible = false;
    }
  }

  closePopup(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', 'accepted');
      this.isVisible = false;
    }
  }
}
