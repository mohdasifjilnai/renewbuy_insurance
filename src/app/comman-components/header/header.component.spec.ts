
  
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { of, throwError } from "rxjs";
import { HeaderComponent } from "./header.component";
import { ApiService } from "../../utilis/service/api.service";
import { ShareService } from "../../utilis/service/share.service";
import { ToastService } from "../../utilis/service/toast.service";
import { CookieService } from "ngx-cookie-service";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  let cookieService: jasmine.SpyObj<CookieService>;
  let toastService: jasmine.SpyObj<ToastService>;

  beforeEach(async () => {
    apiService = jasmine.createSpyObj<ApiService>("ApiService", [
      "getRequestedResponse",
      "getpostRequest",
    ]);
    apiService.getRequestedResponse.and.returnValue(of({ data: [] }));

    cookieService = jasmine.createSpyObj<CookieService>("CookieService", [
      "get",
      "deleteAll",
      "delete",
    ]);
    cookieService.get.and.returnValue("");

    toastService = jasmine.createSpyObj<ToastService>("ToastService", [
      "toastError",
    ]);

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        { provide: ApiService, useValue: apiService },
        {
          provide: Router,
          useValue: { url: "/", events: of({}) },
        },
        {
          provide: ShareService,
          useValue: {
            openSignUpPopUpAction$: of(null),
            username$: of(null),
            triggerAction$: of(null),
          },
        },
        { provide: CookieService, useValue: cookieService },
        { provide: ToastService, useValue: toastService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should activate a category and reload its header links", () => {
    component.setActiveCategory("Health Insurance");

    expect(component.activeCategory).toBe("Health Insurance");
    expect(apiService.getRequestedResponse).toHaveBeenCalledTimes(2);
  });

  it("should toggle the mobile menu and overlay when activated", () => {
    component.isMobileView = true;

    component.setActive();

    expect(component.overlayActive).toBeTrue();
    expect(component.mHeader).toBeTrue();
    expect(component.count).toBe(1);
  });

  it("should toggle the overlay only on mobile views", () => {
    component.isMobileView = true;
    component.toggleOverlayEffect();
    expect(component.overlayActive).toBeTrue();

    component.isMobileView = false;
    component.toggleOverlayEffect();
    expect(component.overlayActive).toBeFalse();
  });

  it("should update the overlay and mobile header state", () => {
    component.setOverlayActive(true);

    expect(component.overlayActive).toBeTrue();
    expect(component.mHeader).toBeTrue();
  });

  it("should select a submenu", () => {
    const submenu = { attributes: { menu_name: "Car Insurance" } };

    component.getsubmenu(submenu, 2);

    expect(component.subSubMenue).toBe(submenu);
    expect(component.activeIndex).toBe(2);
  });

  it("should update login and profile popup state", () => {
    component.login();
    expect(component.isSign).toBeTrue();
    expect(component.mHeader).toBeFalse();
    expect(component.overlayActive).toBeFalse();

    component.afterLogin();
    expect(component.isProfileOpen).toBeTrue();
  });

  it("should close the sign-in component", () => {
    component.isSign = true;

    component.closeComponent();

    expect(component.isSign).toBeFalse();
  });

  it("should return the registrable domain from a URL", () => {
    expect(component.getDomainOnly("https://portal.renewbuy.com/path")).toBe(
      ".renewbuy.com"
    );
  });

  it("should show an error when logout fails", () => {
    const error = { statusText: "Logout failed" };
    apiService.getpostRequest.and.returnValue(throwError(() => error));

    component.logout();

    expect(toastService.toastError).toHaveBeenCalledWith(
      "Logout failed",
      "error"
    );
  });
});
  
