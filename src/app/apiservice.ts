import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterData } from './registerdata';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  private http = inject(HttpClient);
  //constructor(private http: HttpClient) {} //HttpClientModule

  get(): Observable<any> {
    return this.http.get('https://687dac57918b642243326113.mockapi.io/v1/data');
  }

  post(data: RegisterData | null): Observable<any> {
    return this.http.post(
      'https://687dac57918b642243326113.mockapi.io/v1/data',
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
