import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

import { FormsModule } from '@angular/forms';

import { CommanModuleModule } from '../comman-module/comman-module.module';
import { InvestorComponent } from './investor/investor.component';
import { LottieAnimationComponent } from '../comman-components/lottie-animation/lottie-animation.component';

@NgModule({
  declarations: [LandingPageComponent, InvestorComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CommanModuleModule,
    FormsModule,
    LottieAnimationComponent,
    
  ],
})
export class LandingPageModule {}
