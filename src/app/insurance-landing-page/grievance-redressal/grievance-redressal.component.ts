import { Component } from "@angular/core";

@Component({
  selector: "app-grievance-redressal",
  templateUrl: "./grievance-redressal.component.html",
  styleUrl: "./grievance-redressal.component.scss",
})
export class GrievanceRedressalComponent {
  IGMS() {
    window.open(
      "https://www.irdai.gov.in/ADMINCMS/cms/NormalData_Layout.aspx?page=PageNo226&mid=14.3",
      "_blank"
    );
  }
}
