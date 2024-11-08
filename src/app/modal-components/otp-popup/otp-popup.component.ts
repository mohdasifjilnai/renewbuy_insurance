import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ApiService } from '../../utilis/service/api.service';
import { environment } from '../../../environments/environment';
import { ApiConstants } from '../../utilis/api.constant';
import { ToastService } from '../../utilis/service/toast.service';
import { AcceptOnlyDigitDirective } from '../../utilis/directives/accept-only-digit.directive';

declare var bootstrap: any;

@Component({
  selector: 'app-otp-popup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AcceptOnlyDigitDirective],
  templateUrl: './otp-popup.component.html',
  styleUrl: './otp-popup.component.scss',
})
export class OtpPopupComponent {
  @Input() isOtpPopOpen: boolean = false;
  @Input() mobileNumber: any;
  @Output() closeOtpPopUp: EventEmitter<any> = new EventEmitter<any>();
  @Output() isOtpVerified: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('otpPopup') otpModal!: ElementRef;
  apiWaiting: boolean = false;
  otpForm!: FormGroup;
  timer: number = 60;
  timerFlag: boolean = false;
  error: any;
  getIntervalTime: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private toastService: ToastService
  ) {
    this.otpForm = this.formBuilder.group({
      otp: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }
  ngOnInit(): void {
    // let body = {
    //   mobile: this.mobileNumber,
    //   cta_consent: true,
    //   otp_event_type: 3,
    // };
    // this.generateOtp(body);
    this.startTimer();
  }

  /**
   * Handle modal show hide
   */

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const modalElement = new bootstrap.Modal(this.otpModal.nativeElement);
      if (this.isOtpPopOpen) {
        modalElement.show();
      } else {
        modalElement.hide();
      }
    }
  }

  /**
   * Generates a one-time password (OTP) for user verification.
   *
   * This function sends a request to the server to generate an OTP using the provided
   * request body. It updates the UI state to indicate that a request is in progress,
   * and upon a successful response, it sets a timer for OTP expiration.
   *
   * @param {any} body - The request body containing the necessary information to generate the OTP.
   *
   * @returns {void} - This function does not return a value. It updates the component's state and handles API response.
   *
   * @throws {void} - If the API request fails, it sets an error message and displays a toast notification to inform the user.
   *
   * @example
   * const requestBody = { email: 'user@example.com' };
   * this.generateOtp(requestBody);
   *
   * This function makes an API call to the specified endpoint and manages the loading state
   * while waiting for the response. Upon success, it sets a 60-second timer for the OTP.
   * If an error occurs, it will provide feedback via a toast notification.
   */

  generateOtp(body: any) {
    this.apiWaiting = true;
    this.apiService
      .getpostRequest(
        `${environment.unicornDomain}${ApiConstants.Generate_otp}`,
        body,
        ''
      )
      .subscribe(
        (res) => {
          this.apiWaiting = false;
          this.timer = 60;
          this.startTimer();
        },
        (error) => {
          this.apiWaiting = false;
          this.error = 'Failed to generate OTP!';
          this.toastService.toastError(error?.error?.message, 'error');
        }
      );
  }

  /**
   * Starts a timer that counts down from 27 seconds.
   * The timer updates every second and decrements the `timer` property by 1.
   * When the timer reaches 0, it sets the `timerFlag` property to true and clears the interval.
   */
  startTimer() {
    if (this.getIntervalTime) {
      clearInterval(this.getIntervalTime);
    }
    this.getIntervalTime = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.timerFlag = true;
        clearInterval(this.getIntervalTime);
      }
    }, 1000);
  }

  /**
   * Submit OTP form varifyOtp
   */
  submitOtpForm(valid: boolean) {
    if (valid) {
      //call verify otp
      const formData = new FormData();
      formData.append('otp', this.otpForm.get('otp')?.value);
      formData.append('mobile', this.mobileNumber);
      this.apiWaiting = true;
      this.apiService
        .getpostRequest(
          `${environment.unicornDomain}${ApiConstants.Verfy_family_number}`,
          formData,
          ''
        )
        .subscribe(
          (res) => {
            if (res) {
              this.isOtpVerified.emit(true);
              this.apiWaiting = false;
            }
          },
          (error) => {
            this.isOtpVerified.emit(false);
            this.apiWaiting = false;
            this.error = 'Invalid OTP! Enter correct OTP';
            this.toastService.toastError(error?.error?.message, 'error');
          }
        );
    }
  }

  /**
   * change mobile number
   */
  changeMobileNumber() {
    this.closeOtpPopUp.emit({ simpleClose: false, changeMobileNumber: true });
  }


  /**
   * Resends the OTP and resets the timer
   * This function is called when the user requests to resend the OTP.
   * It resets the timer to its initial value (60 seconds) and sets the timer flag to false.
   * It then calls the `startTimer` function to start the countdown.
   **/
  resend() {
    let body = {
      mobile: this.mobileNumber,
      cta_consent: true,
      otp_event_type: 3,
    };
    this.generateOtp(body);
    this.timerFlag = false;
  }

  /**
   * close pop up
   */
  closePopUp(value: any) {
    this.closeOtpPopUp.emit({ simpleClose: true });
  }
  submitOnEnterOtp() {
    if (this.otpForm.valid) {
      this.submitOtpForm(this.otpForm.valid);
    }
  }
}
