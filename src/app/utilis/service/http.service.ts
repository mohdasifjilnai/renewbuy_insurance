import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SetHeaderService } from '../service/set-header.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  deleteRequestResponseWithoutKey(url: string) {
    throw new Error('Method not implemented.');
  }
  deleteRequestWithoutKey(url: string) {
    throw new Error('Method not implemented.');
  }
  deleteRequest(arg0: string, httpOptions: any) {
    throw new Error('Method not implemented.');
  }

  headersFormulated: any;

  constructor(private http: HttpClient, private setHeader: SetHeaderService) {}

  getHeaderAsProductModule(isToken?: any) {
    // this.headersFormulated = this.setHeader.getHeaders(isToken);
    return this.headersFormulated;
  }
  deleteRequestWithToken(url: any, isToken?: any) {
    return this.http.delete(url, this.getHeaderAsProductModule(isToken));
  }

  // Invokes HTTP Get Request
  getRequest(url: string, isToken?: boolean) {
    return this.http.get(url, this.getHeaderAsProductModule(isToken));
  }

  // Invokes HTTP Post Request
  postRequest(url: string, dataObtained: any, isToken?: boolean) {
    const data = dataObtained ? dataObtained : {};
    return this.http.post(url, data, this.getHeaderAsProductModule(isToken));
  }

  // Invokes HTTP patch Request
  patchRequest(url: string, dataObtained: any, isToken?: boolean) {
    const data = dataObtained ? dataObtained : {};
    return this.http.patch(url, data, this.getHeaderAsProductModule(isToken));
  }
  /* Invokes HTTP Get Request */
  getRequestwithHeader(
    url: string,
    headers?: HttpHeaders | { [header: string]: string | string[] } | undefined
  ) {
    return this.http.get(url, { headers });
  }
}
