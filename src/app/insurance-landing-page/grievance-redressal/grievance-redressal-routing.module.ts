import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrievanceRedressalComponent } from './grievance-redressal.component';

const routes: Routes = [
  {
    path:'',
    component: GrievanceRedressalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrievanceRedressalRoutingModule { }
