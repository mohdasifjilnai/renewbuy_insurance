import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  Output,
  PLATFORM_ID,
  ViewChild,
  EventEmitter,
  SimpleChanges,
  Renderer2,
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
import { CapitalizeDirective } from '../../utilis/directives/capitalize.directive';
import { SingleSpaceDirective } from '../../utilis/directives/single-space.directive';

declare var bootstrap: any;
@Component({
  selector: 'app-auto-load-popup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AcceptOnlyDigitDirective, CapitalizeDirective, SingleSpaceDirective],
  templateUrl: './auto-load-popup.component.html',
  styleUrl: './auto-load-popup.component.scss',
})
export class AutoLoadPopupComponent {
  @Input() isAutoloanPopOpen: boolean = true;
  @Input() userPreviousDetails: any;
  @Output() closeAutoLoanPopup: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('autoLoanPopup') myModal!: ElementRef;
  registrationForm!: FormGroup;
  apiWaiting: boolean = false;
  timer: number = 60;
  timerFlag: boolean = false;
  getIntervalTime: any;
  error: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastService: ToastService,
    private renderer: Renderer2
  ) {
    this.createForm();
  }

  /**
   * Close modal on simple click
   */
  closePopUp(value: any) {
    this.closeAutoLoanPopup.emit({ simpleClose: value, submitClose: false });
  }

  /**
   * Handle modal show hide
   */
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const modalElement = new bootstrap.Modal(this.myModal.nativeElement);
      if (this.isAutoloanPopOpen) {
        modalElement.show();
      } else {
        modalElement.hide();
      }
    }
  }

  /**
   * User basic detail form  n
   */
  createForm() {
    this.registrationForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      contactNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern(new RegExp('^[6-9]{1}[0-9]{9}$')),
        ],
      ],
      pan: ['', [Validators.pattern(new RegExp('^[A-Z]{5}[0-9]{4}[A-Z]$'))]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.userPreviousDetails) {
      this.registrationForm.patchValue({
        name: this.userPreviousDetails.name,
        contactNumber: this.userPreviousDetails.contactNumber,
        pan: this.userPreviousDetails.pan,
      });
    }
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
   * Generates a one-time password (OTP) for user verification.
   *
   * This function sends a request to the server to generate an OTP using the provided
   * request body. It updates the UI state to indicate that a request is in progress,
   * and upon a successful response, it sets a timer for OTP expiration.
   *
   * @param {any} body - The request body containing the necessary information to generate the OTP.
   *
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
          if (res) {
            this.closeAutoLoanPopup.emit({
              simpleClose: false,
              submitClose: true,
              userDetails: this.registrationForm.value,
            });
            this.closeAutoLoanPopUpManually();
            this.apiWaiting = false;
            this.timer = 60;
            this.startTimer();
          }
        },
        (error) => {
          this.apiWaiting = false;
          this.error = 'Failed to generate OTP!';
          this.toastService.toastError(error?.error?.message, 'error');
        }
      );
  }

  /**
   * Send user Basic Details and colse pop
   */
  onSubmitregistrationForm(valid: boolean) {
    let body = {
      mobile: this.registrationForm?.get('contactNumber')?.value,
      cta_consent: true,
      otp_event_type: 4,
      context: { name: this.registrationForm?.get('name')?.value },
    };
    this.generateOtp(body);
  }
  closeAutoLoanPopUpManually() {
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
  submitOnEnterRegistrationForm() {
    if (this.registrationForm.valid) {
      this.onSubmitregistrationForm(this.registrationForm.valid);
    }
  }
}
