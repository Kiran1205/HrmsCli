import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; // Base URL for the backend or mock server

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.apiurl;
  }

  // HTTP Headers (optional, modify as needed)
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  /**
   * GET request
   * @param endpoint API endpoint (relative to baseUrl)
   * @returns Observable of the response
   */
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.headers,
    });
  }

  /**
   * POST request
   * @param endpoint API endpoint (relative to baseUrl)
   * @param body Payload for the POST request
   * @returns Observable of the response
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.headers,
    });
  }

  /**
   * PUT request
   * @param endpoint API endpoint (relative to baseUrl)
   * @param body Payload for the PUT request
   * @returns Observable of the response
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.headers,
    });
  }

  /**
   * DELETE request
   * @param endpoint API endpoint (relative to baseUrl)
   * @returns Observable of the response
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.headers,
    });
  }
}
