import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

import { ApiService } from '../../utilis/service/api.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiConstants } from '../../utilis/api.constant';
import { ShareService } from '../../utilis/service/share.service';
import { isPlatformBrowser } from '@angular/common';
import { ToastService } from '../../utilis/service/toast.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-insurar',
  templateUrl: './insurar.component.html',
  styleUrl: './insurar.component.scss',
})
export class InsurarComponent {
  banners: any = [];
  progress: number = 0;
  activeIndex: number = 0;
  activeIndexSlider: number = 0;
  interval: any;
  renewbuyProducts: any;
  quickLinks: any;
  beyondProducts: any;
  firstHalf: any[] = [];
  secondHalf: any[] = [];
  isBrowser: any;
  ind: any = [0];
  totalBanners: number = 4;
  intervalTime = 5000; // 5 seconds for the carousel interval
  webBanner: any = [];
  mobileBanner: any = [];
  isAutoloanPopupOpen: boolean = false;
  isThankyouPopupOpen: boolean = false;
  isOtpPopUpOpen: boolean = false;
  userMobileNumber: number | undefined;
  userBasicDetails: any;

  constructor(
    private apiService: ApiService,
    private sharedService: ShareService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private shareService: ShareService,
    private toastService: ToastService,
    private renderer: Renderer2,
    private share: ShareService,
    private cookieService: CookieService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    const header = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    let url = `${environment['strapiDomain']}${ApiConstants['Home']}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      this.banners = response?.data?.attributes?.banner;
      this.mobileBanner = response?.data?.attributes?.mobile_banner;
      this.renewbuyProducts = response?.data?.attributes?.renewbuy_products;
      this.quickLinks = response?.data?.attributes?.quick_links;
      this.beyondProducts = response?.data?.attributes?.beyond_products;
      this.sharedService.quickActionsGetData(
        response?.data?.attributes?.quick_links
      );

      this.sharedService.ourInsurerPartnersGetData(
        response?.data?.attributes?.insurer_partner
      );
      this.sharedService.cutomerStoreGetData(
        response?.data?.attributes?.custome_stories
      );
      this.sharedService.investorsGetData(
        response?.data?.attributes?.investors
      );
      this.sharedService.podcatsGetData(
        response?.data?.attributes?.podcasts?.data
      );
      if (isPlatformBrowser(this.platformId)) {
        this.startAutoSlide();
      }
    });
    setTimeout(() => {
      this.shareService
        .getUserLocation()
        .then((location) => {
          if (isPlatformBrowser(this.platformId)) {
            sessionStorage.setItem('location', JSON.stringify(location));
          }
        })
        .catch((error) => console.error(error));
    }, 3000);
  }

  navigationByLink(link: any) {
    if (link.product_name == 'Auto Loans') {
      this.isAutoloanPopupOpen = true;
      return;
    } else if (link.product_name != 'Auto Loans' && link.link != null) {
      if (link.product_name == 'Health' || link.product_name == 'Life') {
        this.share.setCrossDomainCookie('insurar_type', link.product_name, 7);
      }
      setTimeout(() => {
        window.location.href = link.link;
      }, 5);
    } else {
      return;
    }
  }

  ngOnInit() {}

  slideInterval: any;
  slideDuration = 3000;
  lastSlideTime = 0;
  goToSlide(index: number) {
    this.activeIndex = index;
    this.resetAutoSlide();
  }
  startAutoSlide() {
    this.lastSlideTime = Date.now();
    this.slideInterval = setInterval(() => {
      this.checkAndSlide();
    }, 100);
  }

  checkAndSlide() {
    const currentTime = Date.now();
    if (currentTime - this.lastSlideTime >= this.slideDuration) {
      this.nextSlide();
      this.lastSlideTime = currentTime;
    }
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.banners.length;
  }

  resetAutoSlide() {
    this.lastSlideTime = Date.now();
  }
  closeAutoLoanModal(event: any) {
    this.isAutoloanPopupOpen = false;
    if (event.submitClose) {
      this.isOtpPopUpOpen = true;
      this.userMobileNumber = event.userDetails.contactNumber;
      this.userBasicDetails = event.userDetails;
    } else {
      this.userBasicDetails = null;
    }
  }
  /**
   * Closes the thank-you modal.
   */
  closeThankYouModal(event: boolean) {
    this.isThankyouPopupOpen = false;
  }

  /**
   * Closes the OTP modal and conditionally opens the auto loan popup.
   *
   * This function is triggered when the OTP modal is closed. It sets the state
   * to indicate that the OTP popup is no longer open. If the event indicates
   * that the mobile number has changed, it opens the auto loan popup.
   */
  closeOtpModal(event: any) {
    if (event.simpleClose) {
      this.isOtpPopUpOpen = false;
      this.userBasicDetails = null;
    }
    if (event.changeMobileNumber) {
      this.isOtpPopUpOpen = false;
      this.isAutoloanPopupOpen = true;
    }
  }

  /**
   * Handles the OTP verification status and proceeds to submit basic details if verified.
   *
   * This function is triggered by an event indicating whether the OTP verification was successful.
   * If the verification status is true, it calls the `submitBasicDetails` method to submit the user's
   * basic information to the server.
   *
   * @param {boolean} isVerified - The OTP verification status. True indicates successful verification.
   *
   * This function serves as a callback for OTP verification, ensuring that user details are
   * submitted only after successful verification.
   */
  getVerifyOtpStatus(isVerified: boolean) {
    if (isVerified) {
      this.submitBasicDetails(isVerified);
      this.isOtpPopUpOpen = false;
    } else {
      this.isOtpPopUpOpen = true;
    }
  }

  /**
   * Submits the basic user details to the server after OTP verification.
   *
   * This function constructs a request body containing user information and
   * sends it to the server to create a customer lead. It manages the UI state
   * based on the success or failure of the submission.
   *
   * @param {boolean} otpVerified - Indicates whether the mobile number has been verified via OTP.
   *
   * On a successful submission, the function displays a success message, opens
   * a thank-you popup, and resets the user details. In case of an error, it
   * displays an error message and closes relevant popups.
   */
  submitBasicDetails(otpVerified: boolean) {
    let body = {
      name: this.userBasicDetails?.name,
      pan: this.userBasicDetails?.pan,
      insurance_type: 6,
      mobile: this.userMobileNumber,
      is_mobile_verified: otpVerified,
    };
    this.apiService
      .getpostRequest(
        `${environment.unicornDomain}${ApiConstants.POST_COSTOMER_LEAD}`,
        body,
        null
      )
      .subscribe(
        (res) => {
          if (res) {
            this.closeAllModalPopUp();
            this.toastService.toastError(res, 'success');
            this.isThankyouPopupOpen = true;
            this.isAutoloanPopupOpen = false;
            this.isOtpPopUpOpen = false;
            this.userBasicDetails = null;
          }
        },
        (error) => {
          this.closeAllModalPopUp();
          this.toastService.toastError(error?.error?.message, 'error');
          this.isAutoloanPopupOpen = false;
          this.isOtpPopUpOpen = false;
          this.isThankyouPopupOpen = false;
          this.userBasicDetails = null;
        }
      );
  }

  closeAllModalPopUp() {
    if (isPlatformBrowser(this.platformId)) {
      const modal = document.querySelector('#otpPopup');
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

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }
}
