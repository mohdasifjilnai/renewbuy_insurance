import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any> | null = null;
  private tokenSubject = new Subject<any>(); // Use this subject to handle WebSocket messages
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.socket$ = new WebSocketSubject('wss://react.rbstaging.in');
      this.socket$.subscribe(
        (message) => this.tokenSubject.next(message),
        (error) => console.error('WebSocket error:', error),
        () => console.warn('WebSocket connection closed')
      );
    }
  }

  requestToken(): void {
    if (this.socket$) {
      this.socket$.next({ type: 'tokenRequest' });
    }
  }

  listenForToken(): Observable<any> {
    return this.tokenSubject.asObservable();
  }
}
