import { Component, Inject, PLATFORM_ID, OnInit } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./utilis/service/api.service";
import { ShareService } from "./utilis/service/share.service";
import { MetaService } from "./utilis/service/meta.service";
import { SetHeaderService } from "./utilis/service/set-header.service";
import { CookieService } from "ngx-cookie-service";
// import { WebSocketService } from './web-socket.service';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  providers: [ApiService, ShareService, MetaService],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "consumer";
  token: string | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private setHeader: SetHeaderService,
    private shareService: ShareService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    // Ensure WebSocket only works on the client side
    // if (isPlatformBrowser(this.platformId)) {
    //   this.webSocketService.requestToken();

    //   this.webSocketService.listenForToken().subscribe((message) => {
    //     console.log(message,"insurance page")
    //     if (message.type === 'tokenResponse') {
    //       this.token = message.token;
    //       console.log('Token received from WebSocket server:', this.token);
    //     }
    //   });
    // }
    if (!this.cookieService.get("location")) {
      setTimeout(() => {
        this.shareService
          .getUserLocation()
          .then((location) => {
            this.shareService.setCrossDomainCookie(
              "location",
              JSON.stringify(location),
              7
            );
            // if (isPlatformBrowser(this.platformId)) {
            //   sessionStorage.setItem('location', JSON.stringify(location));
            // }
          })
          .catch((error) => {
            this.shareService.setCrossDomainCookie("location", "block", 7);
          });
      }, 3000);
    }
  }
}
