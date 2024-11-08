import { CanActivateFn } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../service/auth.service'; // Replace with actual path
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // Check if it's client-side
  if (isPlatformBrowser(platformId)) {
    if (authService.isLoggedIn()) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  }
  return false;
};
