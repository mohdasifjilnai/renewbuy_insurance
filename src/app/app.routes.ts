import { Routes } from '@angular/router';
import { authGuard } from './utilis/guard/auth.guard';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./insurance-landing-page/insurance-landing-page.module').then(
        (r) => r.InsuranceLandingPageModule
      ),
  },

  { path: '**', redirectTo: '' },
];
