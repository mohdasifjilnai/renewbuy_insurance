import {
  Component,
  ElementRef,
  Inject,
  Input,
  Output,
  PLATFORM_ID,
  ViewChild,
  EventEmitter,
  Renderer2,
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;
@Component({
  selector: 'app-thank-you-popup',
  standalone: true,
  imports: [],
  templateUrl: './thank-you-popup.component.html',
  styleUrl: './thank-you-popup.component.scss',
})
export class ThankYouPopupComponent {
  @Input() isThankyouPopOpen: boolean = false;
  @Output() closeThankYouPopUp: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @ViewChild('thankYouPopup') thankyouModal!: ElementRef;
  @ViewChild('gotItButton') gotIt!: ElementRef<HTMLButtonElement>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

  /**
   * Handle modal show hide
   */
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const modalElement = new bootstrap.Modal(
        this.thankyouModal.nativeElement
      );
      if (this.isThankyouPopOpen) {
        modalElement.show();
        this.gotIt.nativeElement?.focus();
      } else {
        modalElement.hide();
      }
    }
  }


  /**
   * Close modal on click of got it button
   */
  closePopUp($event: boolean): void {
    this.closeThankYouPopUpManually();
    this.closeThankYouPopUp.emit($event);
  }

  closeThankYouPopUpManually() {
    if (isPlatformBrowser(this.platformId)) {
      const modal = document.querySelector('#autoLoanPopup');
      const body = document.querySelector('body');
      const mdbackdrop = document.querySelector('.modal-backdrop');

      if (modal) {
        this.renderer.removeClass(modal, 'show');
      }
      if (body) {
        this.renderer.removeClass(body, 'modal-open');
      }
      if (mdbackdrop) {
        this.renderer.removeClass(mdbackdrop, 'modal-backdrop');
        this.renderer.removeClass(mdbackdrop, 'show');
      }
    }
  }
}
