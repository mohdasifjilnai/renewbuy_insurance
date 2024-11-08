import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class IframeCommunicationService {
  private iframeUrl = 'https://react.rbstaging.in/data-hub.html';
  private iframeElement: HTMLIFrameElement | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeIframe();
      window.addEventListener('message', this.handleMessage.bind(this));
    }
  }

  private initializeIframe() {
    this.iframeElement = document.createElement('iframe');
    this.iframeElement.src = this.iframeUrl;
    this.iframeElement.style.display = 'none';
    document.body.appendChild(this.iframeElement);
  }

  setData(key: string, value: string) {
    const message = { action: 'setItem', key, value };
    this.iframeElement?.contentWindow?.postMessage(message, this.iframeUrl);
  }

  getData(key: string) {
    const message = { action: 'getItem', key };
    this.iframeElement?.contentWindow?.postMessage(message, this.iframeUrl);
  }

  private handleMessage(event: MessageEvent) {
    if (event.origin !== 'https://data.renewbuy.com') return;
    const { action, key, value } = event.data;
    if (action === 'getItem') {
      console.log(`Received data from iframe: ${key} = ${value}`);
    }
  }
}
