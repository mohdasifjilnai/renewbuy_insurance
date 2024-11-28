import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { ReadMoreComponent } from '../../modal-components/read-more/read-more.component';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    ReadMoreComponent
  ]
})
export class AboutUsModule { }
