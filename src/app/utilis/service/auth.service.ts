import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  isLoggedIn() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('access_token')) {
        return true;
      }
    }
    return false;
  }
}
