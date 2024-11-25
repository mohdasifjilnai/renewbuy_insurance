import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//
export class ApiService {
  constructor(private http: HttpClient) {}
  getRequestedResponse(url: string, headers: any) {
    return this.getRequestwithHeader(url, headers).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }
  getRequestwithHeader(
    url: string,
    headers?: HttpHeaders | { [header: string]: string | string[] } | undefined
  ): Observable<any> {
    return this.http.get(url, { headers });
  }

  getpostRequest(url: string, body: any, headers: any) {
    return this.http.post(url, body, { headers }).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }

  patchRequestResponse(url: string, body: any, headers: any) {
    return this.http.patch(url, body, { headers });
  }

  deleteRequestResponse(url: any, headers?: any) {
    return this.http.delete(url, { headers }).pipe(
      map((response) => response),
      catchError((err) => JSON.stringify(err))
    );
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    return throwError(() => {
      return error;
    });
  }
}
