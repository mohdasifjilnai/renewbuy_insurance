import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrievanceRedressalRoutingModule } from './grievance-redressal-routing.module';
import { GrievanceRedressalComponent } from './grievance-redressal.component';


@NgModule({
  declarations: [
    GrievanceRedressalComponent
  ],
  imports: [
    CommonModule,
    GrievanceRedressalRoutingModule
  ]
})
export class GrievanceRedressalModule { }
