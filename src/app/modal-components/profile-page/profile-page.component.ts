import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { environment } from '../../../environments/environment';
import { ApiConstants } from '../../utilis/api.constant';
import { ApiService } from '../../utilis/service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShareService } from '../../utilis/service/share.service';
import { ToastModalComponent } from '../toast-modal/toast-modal.component';
import { ToastService } from '../../utilis/service/toast.service';
import { of, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    ToastModalComponent,
  ],
  providers: [provideNgxMask()],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  @Output() isUserProfile: EventEmitter<any> = new EventEmitter<any>();
  profileForm!: FormGroup;
  userData: any;
  // cities: string[] = []; // List of all cities from API
  filteredCities: any[] = []; // Filtered cities based on input
  selectedCity: string | null = null; // For selected city
  // selectedCity: any;
  successMessage: boolean = false;
  apiWaiting: boolean = false;
  private debounceTimer: any;
  minDateString: any;
  maxDateString: any;
  showDropdown: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private sharedService: ShareService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private toastService: ToastService,
    private fb: FormBuilder,
    private http: HttpClient,
    private share: ShareService,
    private cookieService: CookieService
  ) {
    const currentDate = new Date();
    const minDate = new Date(
      currentDate.getFullYear() - 100,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    const maxDate = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    this.minDateString = minDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    this.maxDateString = maxDate.toISOString().split('T')[0];
    this.profileForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      gender: [1],
      dob: ['', Validators.required, this.dateRangeValidator(minDate, maxDate)],
      citySearch: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            new RegExp(
              '^[_a-zA-Z0-9.!#$%&*+/=?^_%+-<>|]+(.[_a-zA-Z0-9]+)@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)(.[a-zA-Z]{2,4})$'
            )
          ),
        ],
      ],
    });
    // this.getCityesData('delhi');
  }

  ngOnInit() {
    this.profileForm.get('name')?.valueChanges.subscribe((value) => {
      if (value) {
        const formattedValue = this.capitalizeEachWord(value);
        if (formattedValue !== value) {
          this.profileForm
            .get('name')
            ?.setValue(formattedValue, { emitEvent: false });
        }
      }
    });
  }
  // Custom Validator for the date range
  // Synchronous custom date range validator
  dateRangeValidator(min: Date, max: Date) {
    return (control: any) => {
      return of(control.value).pipe(
        map((value) => {
          const inputDate = new Date(value);
          if (!value) {
            return null;
          }
          if (inputDate < min || inputDate > max) {
            return { dateRangeInvalid: true };
          }
          return null;
        })
      );
    };
  }

  // Manually handling input change event with debounce logic
  onCitySearchChange(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showDropdown = true;
      const input = (event.target as HTMLInputElement).value;
      // Debounce logic (wait for user to stop typing)
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }

      this.debounceTimer = setTimeout(() => {
        if (input.length > 2) {
          this.searchCities(input).subscribe((cities: any) => {
            this.filteredCities = cities;
          });
        } else {
          this.filteredCities = []; // Clear dropdown if no input
        }
      }, 300);
    } // 300ms debounce time
  }

  customEmailValidator(control: FormControl) {
    const email = control.value;
    // If the email is empty, don't validate (consider it valid)
    if (!email) {
      return null;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email)) {
      if (
        !email.includes('..') &&
        !email.startsWith('.') &&
        !email.includes('.@')
      ) {
        return null; // Valid email
      }
    }

    return { invalidEmail: true }; // Invalid email
  }

  onCitySelect(city: string) {
    this.selectedCity = city;
    this.profileForm.get('city')?.setValue(city);
  }

  /**
   * Emits a close event with the provided flag.
   */
  close(flag: boolean): void {
    this.isUserProfile.emit(flag);
  }
  /**
   * Get User Profile details.//+
   */
  getUserDetail() {
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.cookieService.get('access_token')}`,
    });
    if (isPlatformBrowser(this.platformId)) {
      this.apiService
        .getRequestedResponse(
          `${environment.unicornDomain}${ApiConstants.Get_user_details}`,
          header
        )
        .subscribe(
          (res: any): void => {
            if (res) {
              this.userData = res;
              this.profileForm.patchValue({
                name: this.userData.first_name,
                gender: this.userData.gender,
                dob: this.formatDate(this.userData?.dob),
                citySearch: this.userData.city,
                email: this.userData.email,
              });
              this.selectedCity = this.userData.city;
            }
          },
          (error: any): void => {}
        );
    }
  }
  formatDate(dateString: string): string {
    const [day, month, year] = dateString?.split('/');
    return `${year}-${month}-${day}`;
  }

  /**
   * Handles the submission of the profile form.//+
   */
  submitProfileForm(valid: boolean) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.cookieService.get('access_token')}`,
    });
    if (valid) {
      let dobValue = this.profileForm.get('dob')?.value;
      let formattedDob = '';

      // Convert the date to DD/MM/YYYY format if it's in another format
      if (dobValue) {
        // Convert dd-mm-yyyy to dd/mm/yyyy
        const parts = dobValue.split('-');
        if (parts.length === 3) {
          formattedDob = `${parts[2]}/${parts[1]}/${parts[0]}`; // Assuming dd-mm-yyyy format
        }
      }
      let body = {
        first_name: this.profileForm.get('name')?.value,
        gender: this.profileForm.get('gender')?.value,
        email: this.profileForm.get('email')?.value,
        city: this.profileForm.get('citySearch')?.value,
        dob: formattedDob,
      };
      this.apiWaiting = true;
      if (isPlatformBrowser(this.platformId)) {
        this.apiService
          .patchRequestResponse(
            `${environment.unicornDomain}${ApiConstants.Update_user_details}`,
            body,
            header
          )
          .subscribe(
            (res: any) => {
              this.share.triggerAction();
              this.apiWaiting = false;
              this.isUserProfile.emit(false);
              this.share.setCrossDomainCookie('username', res.first_name, 7);
              this.sharedService.userDetail(res.first_name);
            },
            (error: any) => {
              this.apiWaiting = false;
              this.toastService.toastError(error?.statusText, 'error');
            }
          );
      }
    }
  }

  formattedDate: string = ''; // to hold the formatted date value

  showDatePicker(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    input.type = 'date';
  }

  searchCities(query: any) {
    if (!query.trim()) {
      return of([]); // Return an empty observable if query is empty
    }

    // Replace with your API URL
    return this.http.get<any>(`${ApiConstants['GET_CITY']}/?term=${query}`);
  }

  // Select city from dropdown
  selectCity(city: any) {
    this.selectedCity = city;
    this.profileForm.get('citySearch')?.setValue(city['name']); // Set selected city in the input
    this.filteredCities = []; // Clear dropdown
  }
  dropDownList(cities: any) {
    this.showDropdown = true;
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      if (cities.length > 2) {
        this.searchCities(cities).subscribe((cities: any) => {
          this.filteredCities = cities;
        });
      } else {
        this.filteredCities = [];
      }
    }, 300);
  }

  capitalizeEachWord(value: string): string {
    return value
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  hideDropdown() {
    this.showDropdown = false;
  }
  submitOnEnter() {
    if (this.profileForm.valid) {
      this.submitProfileForm(this.profileForm.valid);
    }
  }
}
