import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
declare var bootstrap: any;

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toastError(error: any, type: string) {
    const toastMessage = document.getElementById('toast-message');
    if (toastMessage) {
      toastMessage.textContent = error;
    }
    const errorToastElement = document.getElementById('errorToast');

    if (errorToastElement) {
      errorToastElement?.classList.remove('text-bg-success', 'text-bg-danger');
      if (type === 'success') {
        errorToastElement?.classList.add('text-bg-success');
      } else {
        errorToastElement?.classList.add('text-bg-danger');
      }
    }
    if (errorToastElement) {
      const toast = new bootstrap.Toast(errorToastElement);
      toast.show();
    }
  }
}
