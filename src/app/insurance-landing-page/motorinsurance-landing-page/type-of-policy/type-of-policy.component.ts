import { Component, Input } from "@angular/core";

@Component({
  selector: "app-type-of-policy",
  templateUrl: "./type-of-policy.component.html",
  styleUrl: "./type-of-policy.component.scss",
})
export class TypeOfPolicyComponent {
  @Input() typeOfPolicy:any;
  insuranceCardData:any;
  insuranceData:any;
  ngOnChanges(){
    this.insuranceData = this.typeOfPolicy;
    this.insuranceCardData = this.typeOfPolicy?.cards;
  }
}
