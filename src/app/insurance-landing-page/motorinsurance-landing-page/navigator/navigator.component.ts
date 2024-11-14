import { Component, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrl: "./navigator.component.scss",
})
export class NavigatorComponent {
  @Input() navigatorTabsData: any;
  redirect(link: any): void {
    if (link != null) {
      window.open(link, "_blank");
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.navigatorTabsData, "navigatorTabsData");
  }
}
