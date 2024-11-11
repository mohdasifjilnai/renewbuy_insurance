import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subject, retryWhen, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any> | null = null;
  private tokenSubject = new Subject<any>(); // Subject to handle incoming WebSocket messages
  private readonly wsUrl = 'wss://react.rbstaging.in'; // Replace with dynamic URL if needed

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.connect(); // Initialize WebSocket connection on the client
    }
  }

  private connect(): void {
    // Create WebSocket subject and set up connection with retry on error
    this.socket$ = webSocket(this.wsUrl);

    this.socket$.pipe(
      retryWhen((errors) =>
        errors.pipe(
          tap((err) => console.error('WebSocket error:', err)),
          delay(3000), // Retry connection every 3 seconds
          tap(() => console.log('Reconnecting WebSocket...'))
        )
      )
    ).subscribe(
      (message) => this.tokenSubject.next(message),
      (error) => console.error('WebSocket error:', error),
      () => console.warn('WebSocket connection closed')
    );
  }

  requestToken(): void {
    if (this.socket$) {
      this.socket$.next({ type: 'tokenRequest' });
    }
  }

  listenForToken(): Observable<any> {
    return this.tokenSubject.asObservable();
  }

  closeConnection(): void {
    this.socket$?.complete();
    this.socket$ = null;
  }
}
