import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurarComponent } from '../landing-page/insurar/insurar.component';
import { FaqComponent } from '../landing-page/faq/faq.component';
import { ChooseRenewbuyComponent } from '../landing-page/choose-renewbuy/choose-renewbuy.component';
import { CustomerStoriesComponent } from '../landing-page/customer-stories/customer-stories.component';
import { CuratedContentComponent } from '../landing-page/curated-content/curated-content.component';
import { ToastModalComponent } from '../modal-components/toast-modal/toast-modal.component';
import { FooterComponent } from '../comman-components/footer/footer.component';
import { HeaderComponent } from '../comman-components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InurerPartnerComponent } from '../landing-page/inurer-partner/inurer-partner.component';
import { QuickActionsComponent } from '../landing-page/quick-actions/quick-actions.component';
import { SignInComponent } from '../modal-components/sign-in/sign-in.component';
import { CookieConsentComponent } from '../comman-components/cookie-consent/cookie-consent.component';
import { CashlessGaragePopupComponent } from '../modal-components/cashless-garage-popup/cashless-garage-popup.component';
import { AutoLoadPopupComponent } from '../modal-components/auto-load-popup/auto-load-popup.component';
import { ThankYouPopupComponent } from '../modal-components/thank-you-popup/thank-you-popup.component';
import { OtpPopupComponent } from '../modal-components/otp-popup/otp-popup.component';
import { RegistraionNumberDirective } from '../utilis/directives/registraion-number.directive';
import { MotorCarInsuranceComponent } from '../insurance-landing-page/motorinsurance-landing-page/motor-car-insurance/motor-car-insurance.component';
import { AddOnsInuranceComponent } from '../insurance-landing-page/motorinsurance-landing-page/add-ons-inurance/add-ons-inurance.component';
import { InclusionsComponent } from '../insurance-landing-page/motorinsurance-landing-page/inclusions/inclusions.component';
import { FaqMotorComponent } from '../insurance-landing-page/motorinsurance-landing-page/faq-motor/faq-motor.component';
import { NavigatorComponent } from '../insurance-landing-page/motorinsurance-landing-page/navigator/navigator.component';
import { TermsConditionHeroComponent } from '../insurance-landing-page/terms-conditions/terms-condition-hero/terms-condition-hero.component';
import { ServiceProviderComponent } from '../insurance-landing-page/terms-conditions/service-provider/service-provider.component';
import { ReduceInsurancePremiumComponent } from '../insurance-landing-page/healthinsurance-landing-page/reduce-insurance-premium/reduce-insurance-premium.component';
import { TypeOfPolicyComponent } from '../insurance-landing-page/motorinsurance-landing-page/type-of-policy/type-of-policy.component';
import { DatePicker } from 'primeng/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { DatePickerModule } from 'primeng/datepicker';
import { DateFormatterDirective } from '../utilis/directives/date-formatter.directive';

@NgModule({
  declarations: [
    InsurarComponent,
    FaqComponent,
    ChooseRenewbuyComponent,
    CustomerStoriesComponent,
    CuratedContentComponent,
    InurerPartnerComponent,
    QuickActionsComponent,
    RegistraionNumberDirective,
    MotorCarInsuranceComponent,
    AddOnsInuranceComponent,
    InclusionsComponent,
    FaqMotorComponent,
    NavigatorComponent,
    ReduceInsurancePremiumComponent,
    TypeOfPolicyComponent,
    ThankYouPopupComponent,
    DateFormatterDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    ToastModalComponent,
    CashlessGaragePopupComponent,
    CookieConsentComponent,
    AutoLoadPopupComponent,
    OtpPopupComponent,
    TermsConditionHeroComponent,
    ServiceProviderComponent,
    DatePicker,
    CalendarModule,
    InputTextModule,
    FloatLabelModule,
    InputMaskModule,
    DatePickerModule,
    
  ],
  exports: [
    InsurarComponent,
    FaqComponent,
    ChooseRenewbuyComponent,
    CustomerStoriesComponent,
    CuratedContentComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    ToastModalComponent,
    InurerPartnerComponent,
    QuickActionsComponent,
    CashlessGaragePopupComponent,
    CookieConsentComponent,
    RegistraionNumberDirective,
    DateFormatterDirective,
    MotorCarInsuranceComponent,
    AddOnsInuranceComponent,
    ReduceInsurancePremiumComponent,
    InclusionsComponent,
    FaqMotorComponent,
    NavigatorComponent,
    TermsConditionHeroComponent,
    ServiceProviderComponent,
    TypeOfPolicyComponent,
    ThankYouPopupComponent,
    DatePicker,
    CalendarModule,
    InputTextModule,
    FloatLabelModule,
    InputMaskModule,
    DatePickerModule,
    
  ],
})
export class CommanModuleModule {}
