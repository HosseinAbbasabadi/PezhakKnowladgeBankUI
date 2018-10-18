import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { URLSearchParams } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class HttpService {
  constructor(private readonly http: HttpClient) {
  }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      "Content-Type": "application/json; charset=utf-8",
      "Accept": "application/json"
    }
    return new HttpHeaders(headersConfig);
  }

  getAll<T>(path: string, body: Object = {}, params: URLSearchParams = new URLSearchParams()) {
    return this.http.get<T>(`${path}`, { headers: this.setHeaders() });
  }

  get<T>(path: string, id: number, params: URLSearchParams = new URLSearchParams()) {
    return this.http.get<T>(`${path}/${id}`, { headers: this.setHeaders() });
  }

  put(path: string, body: Object = {}) {
    return this.http.put<any>(`${path}`,body, { headers: this.setHeaders() });
  }

  post<T>(path: string, body: Object = {}) {
    return this.http.post<T>(`${path}`,body, { headers: this.setHeaders() });
  }

  delete(ajax_url: string, path): Observable<any> {
    return this.http.delete(`${ajax_url}${path}`,{ headers: this.setHeaders() });
  }
  
  identityGet(ajax_url: string, path: string) {
    return this.http.get<string>(`${ajax_url}${path}`, { headers: this.setHeaders() });
  }
}