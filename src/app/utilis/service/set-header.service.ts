import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SetHeaderService {
  httpHeaders: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getHeaders(isToken: boolean, isBearer: boolean): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (isPlatformBrowser(this.platformId)) {
      if (isToken) {
        const token = localStorage.getItem('token');
        if (token) {
          headers = headers.set('Authorization', `Token ${token}`);
        }
      } else if (isBearer) {
        const bearer = localStorage.getItem('bearer');
        const accessToken = localStorage.getItem('access_token');

        if (accessToken) {
          headers = headers.append('Authorization', `Bearer ${accessToken}`);
        } else if (bearer) {
          headers = headers.append('Authorization', `Bearer ${bearer}`);
        }
      }
    }

    return headers;
  }
}
