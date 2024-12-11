import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from "@angular/forms";
import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { ApiService } from "../../utilis/service/api.service";
import { ShareService } from "../../utilis/service/share.service";
import { isPlatformBrowser } from "@angular/common";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ApiConstants } from "../../utilis/api.constant";
import { ToastService } from "../../utilis/service/toast.service";
import { CookieService } from "ngx-cookie-service";

interface Payload {
  mobile: string;
  insurance_type?: number;
  pincode?: string;
  dob?: string;
  registration_number?: string;
  is_mobile_verified: boolean;
}

@Component({
  selector: "app-car-insurance",
  templateUrl: "./car-insurance.component.html",
  styleUrl: "./car-insurance.component.scss",
})
export class CarInsuranceComponent {
  [x: string]: any;
  banners: any = [];
  progress: number = 0;
  activeIndex: number = 0;
  activeIndexSlider: number = 0;
  isOtp: boolean = false;
  otpVerfied: boolean = false;
  phoneNumber: number | any;
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
  registrationForm!: FormGroup;
  selectedTab: any;
  isMotor: boolean = true;
  showCalendar: boolean = true;
  minDateString: any;
  maxDateString: any;
  selectedHeroImage: string = "bigcar.svg";
  isWait: boolean = false;
  insuranceType: any = 1;
  isThankyouPopup: boolean = false;
  dob: string | null = null;
  tabList: any = [
    {
      name: "Car",
      image: "../../../../rb_assets/assets/insurance/car.svg",
      heroImage: "bigcar.svg",
      activeIcon: "../../../../rb_assets/assets/insurance/activeCar.svg",
      type: 1,
    },
    {
      name: "Bike",
      image: "../../../../rb_assets/assets/insurance/bike.svg",
      heroImage: "BikeHero.svg",
      activeIcon: "../../../../rb_assets/assets/insurance/activeBike.svg",
      type: 2,
    },
    {
      name: "CV",
      image: "../../../../rb_assets/assets/insurance/cv.svg",
      heroImage: "CvHero.svg",
      activeIcon: "../../../../rb_assets/assets/insurance/activeCv.svg",
      type: 3,
    },
    {
      name: "Health",
      image: "../../../../rb_assets/assets/insurance/health.svg",
      heroImage: "bighealth.svg",
      activeIcon: "../../../../rb_assets/assets/insurance/activeHealth.svg",
      type: 4,
    },
    {
      name: "Life",
      image: "../../../../rb_assets/assets/insurance/life.svg",
      heroImage: "biglife.svg",
      activeIcon: "../../../../rb_assets/assets/insurance/activeLife.svg",
      type: 5,
    },
  ];
  pageHeaderTextList: any = [
    {
      name: "Car",
      title: `<h1 class="page-title">Car insurance price starting at just <span class="day-color">₹2,088<span>*<h1>`,
      subtitle: `<span class="text-bold">Buy</span> or <span class="text-bold">Renew</span> Car Insurance Online in <span class="text-bold">5 Minutes</span> <span>⚡</span>`,
    },
    {
      name: "Bike",
      title: `<h1 class="page-title">Buy Two Wheeler Insurance Online &#x40;<span class="day-color">
                        &#8377;1.5/day</span></h1>`,
      subtitle: `<div><span class="text-bold">Cover</span> up your <span class="text-bold">Bike</span> in <span class="text-bold"> 2 Minutes</span> <span>⚡</span></div>`,
    },
    {
      name: "CV",
      title: `<h1 class="page-title">Secure your Commercial Vehicle & <span class="day-color">Save upto 65%*</span> on plans</h1>`,
      subtitle: `<span class="text-bold">Cover</span> up your <span class="text-bold">CV</span> in <span class="text-bold">5 Minutes</span> <span>⚡</span>`,
    },
    {
      name: "Health",
      title: `<h1 class="page-title">Compare & buy customised Health Plans starting at just <span class="day-color">₹257/month</span>*</h1>`,
      subtitle: `<span class='text-bold'>Discover a range of coverage plans designed to meet your specific requirements</span>`,
    },
    {
      name: "Life",
      title: `<h1 class="page-title-life">Get <span class="day-color">₹1 Crore </span>Term Insurance plan starting from <span class="day-color">₹16/day</span>*</h1>`,
      subtitle: `<div><img class='percentage-icon' src='../../../../rb_assets/assets/insurance/percentageIcon.svg' alt='percentage icon' /><span class='text-bold'>Get online discount upto </span><span class='discount'>15% off</span>*</div>`,
    },
  ];

  subtitle: string =
    '<span class="text-bold">Buy</span> or <span class="text-bold">Renew</span> Car Insurance Online in <span class="text-bold">5 Minutes</span> <span>⚡</span>';
  title: string =
    '<h1 class="page-title">Car insurance price starting at just <span class="day-color">₹2,088<span>*<h1>';
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private sharedService: ShareService,
    private toastService: ToastService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cookieService: CookieService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    const header = new HttpHeaders({
      Authorization: `Bearer ${environment["bearerToken"]}`,
    });
    let url = `${environment["strapiDomain"]}${ApiConstants["INSURANCE_HOME"]}`;
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
    this.createForm();
    if (
      this.cookieService.get("insurer_type") &&
      this.cookieService.get("insurer_type") !== "None"
    ) {
      this.selectedTab = this.cookieService.get("insurer_type");
      let type = this.tabList.find(
        (el: { name: string }) => el.name == this.selectedTab
      ).type;
      this.onTabClick(this.selectedTab, type);
    } else {
      this.selectedTab = "Car";
    }
    if (
      this.cookieService.get("access_token") &&
      this.cookieService.get("access_token") !== "None"
    ) {
      this.getUserDetail();
    }
  }
  ngOnInit() {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.startProgress();
    // }
  }

  createForm() {
    this.registrationForm = this.fb.group({
      vehicleNumber: [
        "",
        [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(10),
        ],
      ],
      // Validators.pattern('^[A-Z]{2}\\s\\d{2}\\s[A-Z]{2}\\s\\d{4}$'),
      contactNumber: [
        "",
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern(new RegExp("^[6-9]{1}[0-9]{9}$")),
        ],
      ],
    });
  }

  /**
   * Custom validator to check age
   */
  ageValidator(control: any) {
    const birthDate = new Date(control.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    if (age < 18 || age > 100) {
      return { ageInvalid: true };
    }
    return null;
  }

  payLoadMapping() {
    let payload: Payload = {
      mobile: this.registrationForm.get("contactNumber")?.value,
      is_mobile_verified: this.otpVerfied,
    };
    switch (this.selectedTab) {
      case "Car":
        payload["registration_number"] =
          this.registrationForm.get("vehicleNumber")?.value;
        payload.insurance_type = 1;
        break;
      case "Bike":
        payload["registration_number"] =
          this.registrationForm.get("vehicleNumber")?.value;
        payload.insurance_type = 2;
        break;
      case "CV":
        payload["registration_number"] =
          this.registrationForm.get("vehicleNumber")?.value;
        payload.insurance_type = 3;
        break;
      case "Health":
        payload["pincode"] = this.registrationForm.get("pincode")?.value;
        payload.insurance_type = 4;
        break;
      case "Life":
        payload["dob"] = this.registrationForm.get("dob")?.value;
        payload.insurance_type = 5;
        break;
      default:
        break;
    }
    return payload;
  }

  onSubmitregistrationForm(valid: boolean) {
    if (valid) {
      this.phoneNumber = this.registrationForm.get("contactNumber")?.value;
      this.isOtpVerified(true);
      // this.isOtp = true;
      // this.apiService
      //   .getRequestwithHeader(
      //     `${environment.unicornDomain}${ApiConstants.FETCH_LEADS}?mobile=${this.phoneNumber}&insurance_type=${this.insuranceType}`
      //   )
      //   .subscribe(
      //     (response) => {
      //       if (response) {
      //         this.isWait = false;
      //         this.toastService.toastError('Lead already exists !', 'error');
      //       }
      //     },
      //     (err) => {
      //       if ((err.error.message = 'Lead not found')) {
      //         this.isWait = false;
      //         this.isOtp = true;
      //       }
      //     }
      //   );
    }
  }

  OpenOtpPopUp() {
    // const regex = /^[6-9]{1}[0-9]{9}$/;
    // const isValid = regex.test(
    //   this.registrationForm.get('contactNumber')?.value
    // );
    // this.phoneNumber = this.registrationForm.get('contactNumber')?.value;
    // if (isValid) {
    //   this.isOtp = true;
    // }
  }

  /**
   * Reset form values based on selected menu
   */
  resetForm() {
    this.registrationForm.get("vehicleNumber")?.reset();
    if (!this.cookieService.get("access_token")) {
      this.registrationForm.get("contactNumber")?.reset();
    }
    this.otpVerfied = false;
    if (this.isSharedForm(this.selectedTab)) {
      this.isMotor = true;
      this.registrationForm.removeControl("pincode");
      this.registrationForm.removeControl("dob");
      this.registrationForm.addControl(
        "vehicleNumber",
        this.fb.control("", [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(10),
        ])
      );
    } else if (this.selectedTab === "Health") {
      this.isMotor = false;
      this.registrationForm.removeControl("vehicleNumber");
      this.registrationForm.removeControl("dob");
      this.registrationForm.addControl(
        "pincode",
        this.fb.control("", [
          Validators.required,
          Validators.pattern(/^[1-9]\d{5}$/),
          Validators.maxLength(6),
          Validators.minLength(6),
        ])
      );
    } else if (this.selectedTab === "Life") {
      this.isMotor = false;
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
      this.minDateString = minDate.toISOString().split("T")[0]; // Format to YYYY-MM-DD
      this.maxDateString = maxDate.toISOString().split("T")[0];
      this.registrationForm.removeControl("vehicleNumber");
      this.registrationForm.removeControl("pincode");
      this.registrationForm.addControl(
        "dob",
        this.fb.control("", [Validators.required, this.ageValidator])
      );
    }
  }

  /**
   * Reset the form when switching menus
   */
  onTabClick(tab: string, type: any): void {
    this.insuranceType = type;
    // if (tab !== this.selectedTab) {
    this.selectedTab = tab;
    this.selectedHeroImage = this.tabList.find(
      (el: { name: string }) => el.name == tab
    ).heroImage;
    this.title = this.pageHeaderTextList.find(
      (el: { name: string }) => el.name == tab
    ).title;
    this.subtitle = this.pageHeaderTextList.find(
      (el: { name: string }) => el.name == tab
    ).subtitle;
    this.resetForm();
    this.dateValue = null;
    // }
  }

  isSharedForm(tab: string): boolean {
    return ["CV", "Bike", "Car"].includes(tab);
  }

  navigationByLink(link: any) {
    if (link != null) {
      window.location.href = link;
    }
  }
  closeOTPPopUp(event: any) {
    this.toastService.toastError("Lead was not generated", "error");
    this.isOtp = event;
  }
  isOtpVerified(event: boolean) {
    this.otpVerfied = event;
    this.isWait = true;
    if (event) {
      let body = this.payLoadMapping();

      this.apiService
        .getpostRequest(
          `${environment.unicornDomain}${ApiConstants.POST_COSTOMER_LEAD}`,
          body,
          null
        )
        .subscribe(
          (res) => {
            if (res) {
              this.isWait = false;
              if (this.selectedTab == "Health") {
                window.location.href =
                  "https://health.renewbuyinsurance.com/health/basic-details";
              } else if (this.selectedTab == "Life") {
                this.isThankyouPopup = true;
                this.dob = null;
                // window.location.href =
                //   'https://www.renewbuyinsurance.com/online-term-plan';
                // this.toastService.toastError(res, "success");
                this.registrationForm.reset();
              } else if (this.selectedTab === "Bike") {
                window.location.href = `https://apex.renewbuyinsurance.com/motor/?reg_no=${
                  this.registrationForm.get("vehicleNumber")?.value
                }&mobile_no=${
                  this.registrationForm.get("contactNumber")?.value
                }&vehicle=twoWheeler`;
              } else if (this.selectedTab === "Car") {
                window.location.href = `https://apex.renewbuyinsurance.com/motor/?reg_no=${
                  this.registrationForm.get("vehicleNumber")?.value
                }&mobile_no=${
                  this.registrationForm.get("contactNumber")?.value
                }&vehicle=fourWheeler`;
              } else if (this.selectedTab === "CV") {
                this.isThankyouPopup = true;
                // this.toastService.toastError(res, "success");
                this.registrationForm.reset();
              } else {
                this.registrationForm.reset();
              }
            }
          },
          (error) => {
            this.toastService.toastError(error?.error?.message, "error");
          }
        );
    }
  }
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

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }
  submitOnEnterRegistrationForm() {
    if (this.registrationForm.valid) {
      this.onSubmitregistrationForm(this.registrationForm.valid);
    }
  }
  dateValue: string | null = null;

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.dob = input.value;
  }
  getUserDetail() {
    const header = new HttpHeaders({
      Authorization: `Bearer   ${this.cookieService.get("access_token")}`,
    });
    this.apiService
      .getRequestedResponse(
        `${environment.unicornDomain}${ApiConstants.Get_user_details}`,
        header
      )
      .subscribe((res: any): void => {
        this.registrationForm.patchValue({
          contactNumber: res.mobile,
        });
        this.registrationForm.get("contactNumber")?.disable();
      });
  }
  closeThankYouModal(event: boolean) {
    this.isThankyouPopup = false;
  }
}
