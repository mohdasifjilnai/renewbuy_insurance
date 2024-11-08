import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './utilis/service/api.service';
import { ShareService } from './utilis/service/share.service';
import { MetaService } from './utilis/service/meta.service';
import { SetHeaderService } from './utilis/service/set-header.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  providers: [ApiService, ShareService, MetaService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  title = 'consumer';
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private setHeader: SetHeaderService) {
    if (isPlatformServer(this.platformId)) {
      

    } else {
      
    }
  }
  
  ngOnInit(): void {}
}
