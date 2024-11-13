import { CommonModule, DOCUMENT, isPlatformBrowser } from "@angular/common";
import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  PLATFORM_ID,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ProfilePageComponent } from "../profile-page/profile-page.component";
import { ToastModalComponent } from "../toast-modal/toast-modal.component";
import { AcceptOnlyDigitDirective } from "../../utilis/directives/accept-only-digit.directive";
import { ToastService } from "../../utilis/service/toast.service";
import { ApiService } from "../../utilis/service/api.service";
import { CookieService } from "ngx-cookie-service";
import { ShareService } from "../../utilis/service/share.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { environment } from "../../../environments/environment";
import { ApiConstants } from "../../utilis/api.constant";
import { HttpHeaders } from "@angular/common/http";
import { IframeCommunicationService } from "../../utilis/service/iframe-communication.service.ts.service";

declare var bootstrap: any;

@Component({
  selector: "app-new-sign-in",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfilePageComponent,
    ToastModalComponent,
    AcceptOnlyDigitDirective,
  ],
  templateUrl: "./new-sign-in.component.html",
  styleUrl: "./new-sign-in.component.scss",
})
export class NewSignInComponent {
  @Output() isClosePopUp: EventEmitter<any> = new EventEmitter<any>();
  @Output() isClosePopUpExistUser = new EventEmitter<boolean>(false);
  @Output() isCloseOTPPopUp: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeEvent = new EventEmitter<void>();
  @Output() isVerifyOtp = new EventEmitter<boolean>();
  @Input() isSignUp: boolean = false;
  @Input() isRenewbuyInsurance: boolean = false;
  @Input() mobileNumber: number | any;
  @ViewChild("newSignIn") newSignInModal!: ElementRef;
  signUpForm!: FormGroup;
  otpForm!: FormGroup;
  // isSignUp: boolean = false;
  timer: number = 60;
  timerFlag: boolean = false;
  getIntervalTime: any;
  isProfile: boolean = false;
  isClosePopup: boolean = false;
  // isClosePopUpExistUser:boolean = false;
  error: any;
  deviceInfo: any;
  location: any;
  getDeviceType: any;
  // isUserCheckLogin: boolean = true;
  apiWaiting: boolean = false;
  @Input() isNewSignInPopOpen: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private toastService: ToastService,
    private cookieService: CookieService,
    private share: ShareService,
    private deviceService: DeviceDetectorService
  ) {
    this.signUpForm = this.formBuilder.group({
      mobile_number: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(new RegExp("^[6-9]{1}[0-9]{9}$")),
        ],
      ],
      terms_conditions: [true, Validators.required],
    });
    this.otpForm = this.formBuilder.group({
      otp: [
        "",
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }
  ngOnInit(): void {
    if (this.isRenewbuyInsurance) {
      let body = {
        mobile: this.mobileNumber,
        cta_consent: true,
        otp_event_type: 3,
      };
      this.generateOtp(body);
    }
  }

  /**
   * Handle modal show hide
   */
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const modalElement = new bootstrap.Modal(
        this.newSignInModal.nativeElement
      );
      if (this.isNewSignInPopOpen) {
        modalElement.show();
      } else {
        modalElement.hide();
      }
    }
  }

  /**
   * Device Information:
   * **/
  /**
   * Emits a close event with the provided flag.
   *
   */
  close(flag: boolean): void {
    if (!this.isRenewbuyInsurance) {
      this.closeEvent.emit();
      this.isSignUp = flag;
    } else {
      this.isCloseOTPPopUp.emit(false);
    }
  }
  isClose(event: any) {
    this.isProfile = event;
    this.isClosePopUp.emit(event);
  }

  /**
   * Handles the submission of the sign-up form
   */

  submitForm(valid: boolean, event: any) {
    if (valid) {
      let body = {
        mobile: this.signUpForm.get("mobile_number")?.value,
        cta_consent: this.signUpForm.get("terms_conditions")?.value,
        otp_event_type: 1,
      };
      // this.onSubmitOrder(event);
      this.generateOtp(body);
    }
  }
  generateOtp(body: any) {
    this.apiWaiting = true;
    this.apiService
      .getpostRequest(
        `${environment.unicornDomain}${ApiConstants.Generate_otp}`,
        body,
        ""
      )
      .subscribe(
        (res) => {
          this.apiWaiting = false;
          this.isSignUp = true;
          this.timer = 60;
          this.startTimer();
        },
        (error) => {
          this.apiWaiting = false;
          this.error = "Failed to generate OTP!";
          this.toastService.toastError(error?.error?.message, "error");
        }
      );
  }
  /**
   * Handles the submission of the otp form.//+
   * Verfy_family_number
   */
  submitOtpForm(valid: boolean) {
    if (valid && !this.isRenewbuyInsurance) {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      if (this.deviceInfo?.deviceType == "desktop") {
        this.getDeviceType = 3;
      } else {
        if (this.deviceInfo?.os == "iOS") {
          this.getDeviceType = 1;
        } else if (this.deviceInfo?.os == "Android") {
          this.getDeviceType = 2;
        } else {
          this.getDeviceType = 3;
        }
      }
      const userLocationString = sessionStorage.getItem("location");
      let body = {
        mobile:
          this.signUpForm.get("mobile_number")?.value || this.mobileNumber,
        otp: this.otpForm.get("otp")?.value,
        cta_consent: this.signUpForm.get("terms_conditions")?.value,
        user_location: userLocationString
          ? JSON.parse(userLocationString)
          : null,
        location_source: this.getDeviceType,
      };
      this.apiWaiting = true;
      this.apiService
        .getpostRequest(
          `${environment.unicornDomain}${ApiConstants.verify_otp}`,
          body,
          ""
        )
        .subscribe(
          (res: any) => {
            if (res) {
              this.apiWaiting = false;
              this.share.setCrossDomainCookie(
                "access_token",
                res?.access_token,
                7
              );
              if (res?.is_new_user == true) {
                this.isSignUp = true;
                this.isProfile = true;
                this.getUserDetail();
              } else {
                this.isClosePopup = true;
                this.getUserDetail();
              }
            }
          },
          (error) => {
            this.isVerifyOtp.emit(false);
            this.apiWaiting = false;
            this.error = "Invalid OTP! Enter correct OTP";
            this.toastService.toastError(error?.error?.message, "error");
          }
        );
    } else if (valid && this.isRenewbuyInsurance) {
      const formData = new FormData();
      formData.append(
        "mobile",
        this.signUpForm.get("mobile_number")?.value || this.mobileNumber
      );
      formData.append("otp", this.otpForm.get("otp")?.value);
      this.apiWaiting = true;
      this.apiService
        .getpostRequest(
          `${environment.unicornDomain}${ApiConstants.Verfy_family_number}`,
          formData,
          ""
        )
        .subscribe(
          (res: any) => {
            if (res) {
              this.apiWaiting = false;

              this.isVerifyOtp.emit(true);
              this.isCloseOTPPopUp.emit(false);
            }
          },
          (error) => {
            this.isVerifyOtp.emit(false);
            this.apiWaiting = false;
            this.error = "Invalid OTP! Enter correct OTP";
            this.toastService.toastError(error?.error?.message, "error");
          }
        );
    }
  }
  /**
   * Get User Profile details.//+
   */
  getUserDetail() {
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.cookieService.get("access_token")}`,
    });
    // if (isPlatformBrowser(this.platformId)) {
    this.apiService
      .getRequestedResponse(
        `${environment.unicornDomain}${ApiConstants.Get_user_details}`,
        header
      )
      .subscribe(
        (res: any): void => {
          if (res && res?.first_name && res?.gender && res?.dob && res?.email) {
            this.share.setCrossDomainCookie("username", res.first_name, 7);
            this.isClosePopUpExistUser.emit(true);
            // setTimeout(() => {
            //   window.location.href = environment['dashboardDomain'];
            // }, 100);
          } else {
            this.share.setCrossDomainCookie("username", res.first_name, 7);
            this.isSignUp = true;
            this.isProfile = true;
          }
          this.share.triggerAction();
        },
        (error: any): void => {
          this.toastService.toastError(error?.error?.message, "error");
        }
      );
    // }
  }
  /**
   * Handles the user's request to change the mobile number.
   */
  changeMobileNumber() {
    if (this.isRenewbuyInsurance) {
      this.isCloseOTPPopUp.emit(false);
    } else {
      clearInterval(this.getIntervalTime);
      this.isSignUp = false;
    }
  }

  /**
   * Starts a timer that counts down from 27 seconds.
   * The timer updates every second and decrements the `timer` property by 1.
   * When the timer reaches 0, it sets the `timerFlag` property to true and clears the interval.
   */
  startTimer() {
    // Clear any existing intervals before starting a new one
    if (this.getIntervalTime) {
      clearInterval(this.getIntervalTime);
    }

    // Start the timer countdown
    this.getIntervalTime = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.timerFlag = true;
        clearInterval(this.getIntervalTime);
      }
    }, 1000);
  }

  /**
   * Resends the OTP and resets the timer
   * This function is called when the user requests to resend the OTP.
   * It resets the timer to its initial value (60 seconds) and sets the timer flag to false.
   * It then calls the `startTimer` function to start the countdown.
   **/
  resend() {
    this.submitForm(true, null); // Trigger form submission or resend logic
    // this.timer = 60; // Reset timer value to 60 seconds
    this.timerFlag = false; // Reset timer flag
    // this.startTimer(); // Start the countdown again
  }

  // Method to handle "Enter" key press
  submitOnEnter() {
    if (this.signUpForm.valid) {
      this.submitForm(this.signUpForm.valid, null);
    }
  }
  submitOnEnterOtp() {
    if (this.otpForm.valid) {
      this.submitOtpForm(this.otpForm.valid);
    }
  }
}
