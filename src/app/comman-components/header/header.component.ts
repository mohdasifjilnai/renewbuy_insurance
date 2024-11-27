import {
  Component,
  HostListener,
  Inject,
  Output,
  PLATFORM_ID,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { SignInComponent } from "../../modal-components/sign-in/sign-in.component";
import { Router } from "@angular/router";
import { ShareService } from "../../utilis/service/share.service";
import { ProfilePageComponent } from "../../modal-components/profile-page/profile-page.component";
import { ApiService } from "../../utilis/service/api.service";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ApiConstants } from "../../utilis/api.constant";
import { CookieService } from "ngx-cookie-service";
import { Renderer2, ElementRef } from "@angular/core";
import { NewSignInComponent } from "../../modal-components/new-sign-in/new-sign-in.component";
import { ToastService } from "../../utilis/service/toast.service";
@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    CommonModule,
    SignInComponent,
    ProfilePageComponent,
    NewSignInComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() isClosePopUp: EventEmitter<any> = new EventEmitter<any>();
  //  @Output() isClosePopUpExistUser = new EventEmitter<boolean>(false);
  Header_links: any;
  activeCategory: string = "Motor Insurance";
  dropdownActive: boolean = false;
  overlayActive: boolean = false;
  isSign: boolean = false;
  isUserLogin: boolean = false;
  username: any;
  isHomePage: boolean = false;
  subMenu: any;
  subHeadermenu: any = [];
  notShowSubMenu: any = [];
  motorInsuranceCompanies: any[] = [];
  twoWheelerInsurance: any[] = [];
  carInsurance: any[] = [];
  productList: any;
  motor_insurance_companies_link: any;
  subSubMenue: any;
  isProfileComplete: boolean = false;
  userProfileComplete: boolean = false;
  private subscription: any;

  count = 0; // Corrected the variable name
  mHeader = false;
  isMobileView = false;
  isScrolled = false;
  isProfileOpen = false;
  // Listen for scroll events
  actionUrl: any; //= `${environment['mainDomain']}${ApiConstants['REDIRECT']}`;
  redirect_uri: any; //= environment['mainDomain'];
  parent_uri: any; // = environment['renewbuyInsuranceDomain'];
  sub_domain: any; //environment['redirect_subdomain'];
  access_token: any;
  productName: any;
  location: any;
  @ViewChild("renewbuyinsurance_form")
  renewbuyinsuranceform!: ElementRef<HTMLFormElement>;
  projectName: any;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    // Check if the page has been scrolled down
    this.isScrolled = window.scrollY > 0;
  }
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private apiService: ApiService,
    private sharedService: ShareService,
    private cookieService: CookieService,
    private toastService: ToastService
  ) {
    this.checkViewport();
    this.getHeaderLink(this.activeCategory);
    this.getTokenAndUsername();
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === "/";
    });
    this.sharedService.openSignUpPopUpAction$.subscribe((res) => {
      this.isSign = res;
    });
    if (this.cookieService.get("access_token")) {
      this.access_token = this.cookieService.get("access_token");
      this.username = this.cookieService.get("username");
    }
    if (this.cookieService.get("project_name")) {
      this.projectName = this.cookieService.get("project_name");
    }
  }
  @HostListener("window:resize", ["$event"])
  onResize() {
    this.checkViewport();
  }
  checkViewport() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth < 768;
      if (!this.isMobileView) {
        this.overlayActive = false;
        this.mHeader = false;
      }
    }
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.getHeaderLink(this.activeCategory);
  }

  setOverlayActive(isActive: boolean): void {
    this.overlayActive = isActive;
    this.mHeader = !this.mHeader;
  }

  setActive() {
    if (this.isMobileView) {
      if (this.count === 0) {
        this.overlayActive = true;
      } else {
        this.overlayActive = !this.overlayActive;
      }
      this.count++;
      this.mHeader = !this.mHeader;
    }
  }

  toggleOverlayEffect() {
    if (this.isMobileView) {
      this.overlayActive = !this.overlayActive;
    } else {
      this.overlayActive = false;
    }
  }

  goToUserProfile(goToUserProfile: boolean, page: any) {
    if (!goToUserProfile) {
      this.actionUrl = `${environment["dashboardDomain"]}${ApiConstants["REDIRECT"]}`;
      this.redirect_uri = environment["dashboardDomain"] + page;
      this.parent_uri = environment["renewbuyInsuranceDomain"];
      this.sub_domain = this.getDomainOnly(environment["dashboardDomain"]);
      this.location = this.cookieService.get("location");
      setTimeout(() => {
        this.renewbuyinsuranceform.nativeElement.submit();
      }, 0);
    } else {
      this.isProfileOpen = false;
      setTimeout(() => {
        this.userProfileComplete = true;
      }, 0);
    }
  }

  goToPolicies(isProfileComplete: boolean, page: any) {
    if (!isProfileComplete) {
      // window.location.href = environment["dashboardDomain"] + "/" + page;
      this.actionUrl = `${environment["dashboardDomain"]}${ApiConstants["REDIRECT"]}`;
      this.redirect_uri = environment["dashboardDomain"] + page;
      this.parent_uri = environment["renewbuyInsuranceDomain"];
      this.sub_domain = this.getDomainOnly(environment["dashboardDomain"]);
      this.location = this.cookieService.get("location");
      setTimeout(() => {
        this.renewbuyinsuranceform.nativeElement.submit();
      }, 0);
    } else {
      this.isProfileOpen = false;
      setTimeout(() => {
        this.userProfileComplete = true;
      }, 0);
    }
  }

  login() {
    this.isSign = true;
    this.mHeader = false;
    this.overlayActive = false;
  }
  afterLogin() {
    this.isProfileOpen = true;
    this.mHeader = false;
    this.overlayActive = false;
  }

  close(event: any) {
    this.isSign = event;
    this.isUserLogin = event ? false : true;
    this.sharedService.username$.subscribe((username) => {
      this.username = username;
      this.actionUrl = `${environment["mainDomain"]}${ApiConstants["REDIRECT"]}`;
      this.access_token = this.cookieService.get("access_token");
      this.sub_domain = this.getDomainOnly(environment["mainDomain"]);
      this.parent_uri = environment["renewbuyInsuranceDomain"];
      this.redirect_uri = window.location.href;
      this.username = this.username;
      this.projectName = "renewbuyinsurance";
      if (this.cookieService.get("location")) {
        this.location = this.cookieService.get("location");
      }
      this.redirect_uri = environment["renewbuyInsuranceDomain"];
      setTimeout(() => {
        this.renewbuyinsuranceform.nativeElement.submit();
      }, 0);
    });
  }
  closePopUpForExistUser(event: any) {
    if (event) {
      if (this.cookieService.get("access_token")) {
        this.access_token = this.cookieService.get("access_token");
        this.username = this.cookieService.get("username");
      }
      this.isSign = false;
      this.userProfileComplete = false;
      // window.location.href = environment["dashboardDomain"] + "/" + page;
      this.actionUrl = `${environment["dashboardDomain"]}${ApiConstants["REDIRECT"]}`;
      this.redirect_uri =
        window.location.pathname == "/"
          ? environment["dashboardDomain"]
          : window.location.href;
      this.parent_uri = environment["renewbuyInsuranceDomain"];
      this.sub_domain = this.getDomainOnly(environment["dashboardDomain"]);
      this.projectName = "renewbuyinsurance";
      setTimeout(() => {
        this.renewbuyinsuranceform.nativeElement.submit();
      }, 0);
      // if (isPlatformBrowser(this.platformId)) {
      //   window.location.href = environment['dashboardDomain'];
      //   this.isSign = false;
      // }
    }
  }
  // logout() {
  //   this.isUserLogin = false;
  //   this.overlayActive = false;
  //   this.cookieService.deleteAll('/', environment['subDomain']);
  //   this.cookieService.delete('username', '/', window.location.hostname);
  //   this.router.navigate(['/']);
  // }
  logout() {
    this.isUserLogin = false;
    this.overlayActive = false;
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.cookieService.get("access_token")}`,
    });
    this.apiService
      .getpostRequest(
        `${environment["unicornDomain"]}${ApiConstants.LOGOUT}`,
        "",
        header
      )
      .subscribe(
        (response) => {
          if (response) {
            this.cookieService.deleteAll("/", environment["subDomain"]);
            this.cookieService.delete(
              "username",
              "/",
              window.location.hostname
            );
            window.location.reload();
            // window.location.href = environment["renewbuyInsuranceDomain"];
          }
        },
        (error: any) => {
          this.toastService.toastError(error?.statusText, "error");
        }
      );
  }
  closeComponent() {
    this.isSign = false;
  }
  redirect(link: any): void {
    if (link != null) {
      window.location.href = link;
    }
  }
  getHeaderLink(activeCategory: any) {
    this.motorInsuranceCompanies = [];
    this.carInsurance = [];
    this.carInsurance = [];
    this.notShowSubMenu = [];
    const Header = new HttpHeaders({
      Authorization: `Bearer ${environment["bearerToken"]}`,
    });
    let url = `${environment["strapiDomain"]}${ApiConstants["Header"]}`;
    this.apiService.getRequestedResponse(url, Header).subscribe((response) => {
      this.Header_links = response?.data;
      for (let header_head of response?.data) {
        if (header_head?.attributes?.title == this.activeCategory) {
          for (let subMenu of header_head?.attributes?.menu_items?.data) {
            this.notShowSubMenu.push(subMenu);
            this.getsubmenu(this.notShowSubMenu[0], 0);
          }
        }
      }
    });
  }
  activeIndex: number = 0;

  getsubmenu(submenu: any, index: number) {
    this.subSubMenue = submenu;
    this.activeIndex = index;
  }
  ngOnInit(): void {
    this.resetAccordion();
    this.subscription = this.sharedService.triggerAction$.subscribe(() => {
      this.getTokenAndUsername();
    });
  }
  getTokenAndUsername() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.cookieService.get("access_token")) {
        this.isUserLogin = true;
        this.isProfileOpen = true;
        this.username = this.cookieService.get("username");
        this.getUserDetail();
      }
    }
  }

  resetAccordion(): void {
    const collapseElements = this.el.nativeElement.querySelectorAll(
      ".accordion-collapse"
    );
    collapseElements.forEach((collapse: HTMLElement) => {
      this.renderer.removeClass(collapse, "show"); // Ensure no items are shown
    });
  }

  redirectToHome() {
    // if (isPlatformBrowser(this.platformId)) {
    //   window.location.href = environment["mainDomain"];
    // }
    this.actionUrl = `${environment["mainDomain"]}${ApiConstants["REDIRECT"]}`;
    this.redirect_uri = environment["mainDomain"];
    this.parent_uri = environment["renewbuyInsuranceDomain"];
    this.sub_domain = this.getDomainOnly(environment["mainDomain"]);
    this.location = this.cookieService.get("location")
      ? this.cookieService.get("location")
      : "";
    setTimeout(() => {
      this.renewbuyinsuranceform.nativeElement.submit();
    }, 0);
    // this.router.navigate(['/']);
  }
  /**
   * Get User Profile details.//+
   */
  getUserDetail() {
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.cookieService.get("access_token")}`,
    });
    if (isPlatformBrowser(this.platformId)) {
      this.apiService
        .getRequestedResponse(
          `${environment.unicornDomain}${ApiConstants.Get_user_details}`,
          header
        )
        .subscribe(
          (res: any): void => {
            if (
              res &&
              res?.first_name &&
              res?.gender &&
              res?.dob &&
              res?.email
            ) {
              this.username = res?.first_name;
              this.sharedService.setCrossDomainCookie(
                "username",
                this.username,
                7
              );
              this.sharedService.setCrossDomainCookie(
                "isProfileComplete",
                "true",
                7
              );
              this.isProfileComplete = false;
            } else {
              console.log(res, "get user details");
              if (!this.cookieService.get("isProfileComplete")) {
                this.actionUrl = `${environment["mainDomain"]}${ApiConstants["REDIRECT"]}`;
                this.redirect_uri = environment["renewbuyInsuranceDomain"];
                this.parent_uri = environment["renewbuyInsuranceDomain"];
                this.sub_domain = this.getDomainOnly(environment["mainDomain"]);
                this.location = this.cookieService.get("location")
                  ? this.cookieService.get("location")
                  : "";
                setTimeout(() => {
                  this.sharedService.setCrossDomainCookie(
                    "isProfileComplete",
                    "false",
                    7
                  );
                  this.renewbuyinsuranceform.nativeElement.submit();
                }, 0);
              }
              this.isUserLogin = true;
              this.isProfileComplete = true;
            }
          },
          (error: any): void => {
            if (error.status == 588) {
              this.cookieService.deleteAll("/", environment["subDomain"]);
              this.cookieService.delete(
                "username",
                "/",
                window.location.hostname
              );
              window.location.href = environment["renewbuyInsuranceDomain"];
              this.isUserLogin = false;
            }
          }
        );
    }
  }
  ngAfterViewChecked() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.overlayActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }
  closeProfile(event: any) {
    this.isClosePopUp.emit(event);
    this.userProfileComplete = false;
    this.isProfileComplete = false;
    this.actionUrl = `${environment["mainDomain"]}${ApiConstants["REDIRECT"]}`;
    this.access_token = this.cookieService.get("access_token");
    this.sub_domain = this.getDomainOnly(environment["mainDomain"]);
    this.parent_uri = environment["renewbuyInsuranceDomain"];
    this.redirect_uri = window.location.href;
    this.username = this.username;
    this.projectName = "renewbuyinsurance";
    if (this.cookieService.get("location")) {
      this.location = this.cookieService.get("location");
    }
    setTimeout(() => {
      this.renewbuyinsuranceform.nativeElement.submit();
    }, 0);
  }

  getDomainOnly(url: any) {
    const parsedUrl = new URL(url);

    const hostname = parsedUrl.hostname;

    const domainMatch = hostname.match(/(?:\w+\.)?(\w+\.\w+)$/);

    return domainMatch ? `.${domainMatch[1]}` : null;
  }
}
