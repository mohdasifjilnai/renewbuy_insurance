import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { ApiService } from "./api.service";
import { BehaviorSubject, Subject } from "rxjs";
import { makeStateKey } from "@angular/platform-browser";
import { isPlatformBrowser } from "@angular/common";
import { CookieService } from "ngx-cookie-service";
import { environment } from "../../../environments/environment";
const DATA_KEY = makeStateKey<any>("data");

@Injectable({
  providedIn: "root",
})
export class ShareService {
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getHomePageData: Subject<any> = new Subject();
  private ourInsurerPartnersShareData = new BehaviorSubject<any>(null);
  ourInsurerPartnersSharedData$ =
    this.ourInsurerPartnersShareData.asObservable();
  private customersShareData = new BehaviorSubject<any>(null);
  customersShareData$ = this.customersShareData.asObservable();
  private investorsShareData = new BehaviorSubject<any>(null);
  investorsShareData$ = this.investorsShareData.asObservable();
  private podcatsShareData = new BehaviorSubject<any>(null);
  podcatsShareData$ = this.podcatsShareData.asObservable();
  private username = new BehaviorSubject<any>(null);
  username$ = this.username.asObservable();
  private getQuickActions = new BehaviorSubject<any>(null);
  getQuickActions$ = this.getQuickActions.asObservable();
  private triggerActionSource = new Subject<void>();
  triggerAction$ = this.triggerActionSource.asObservable();
  private openSignUpPopUp = new BehaviorSubject<any>(null);
  openSignUpPopUpAction$ = this.openSignUpPopUp.asObservable();
  private title = new BehaviorSubject<any>(null);
  titleAction$ = this.title.asObservable();

  getTitle(data: any) {
    this.title.next(data);
  }

  ourInsurerPartnersGetData(data: any) {
    this.ourInsurerPartnersShareData.next(data);
  }

  cutomerStoreGetData(data: any) {
    this.customersShareData.next(data);
  }
  investorsGetData(data: any) {
    this.investorsShareData.next(data);
  }
  podcatsGetData(data: any) {
    this.podcatsShareData.next(data);
  }

  userDetail(data: any) {
    this.username.next(data);
  }
  quickActionsGetData(data: any) {
    this.getQuickActions.next(data);
  }

  openSignUpModal(isOpen: boolean) {
    this.openSignUpPopUp.next(isOpen);
  }

  /**
   * Set a cookie that can be shared across subdomains.
   */
  setCrossDomainCookie(name: string, value: string, days: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const expires = new Date();
      expires.setDate(expires.getDate() + days);
      // this.cookieService.set(name, value, {
      //   expires,
      //   path: '/',
      //   domain: environment['subDomain'],
      //   secure: true,
      //   sameSite: 'Lax',
      // });
      this.cookieService.set(name, value, {
        expires,
        path: "/",
        domain: "renewbuyinsurance.com",
        secure: true,
        sameSite: "None",
      });
    }
  }

  triggerAction() {
    this.triggerActionSource.next();
  }

  getUserLocation(): Promise<{ lat: number; lon: number }> {
    return new Promise((resolve, reject) => {
      if (isPlatformBrowser(this.platformId)) {
        if (
          window.location.href != "http://test.rbstaging.in/" &&
          navigator?.geolocation
        ) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              });
            },
            (error) => {
              reject(`Geolocation error: ${error.message}`);
            }
          );
        } else {
          reject("Geolocation is not supported by this browser.");
        }
      }
    });
  }
}
