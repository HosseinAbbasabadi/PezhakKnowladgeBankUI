import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthenticationService } from "./authentication.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

    constructor(private readonly authenticationService: AuthenticationService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token = this.authenticationService.getToken();
        if(token === null){
          this.authenticationService.login();
        }
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.authenticationService.getToken()}`
            },
            responseType: 'json'
          });
          return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if(err.status === 400 ) {
                    alert(err.error);
                }

                if (err.status === 401) {
                  this.authenticationService.login();
                }

                if(err.status === 403) {
                  alert("شما دسترسی لازم جهت انجام این عملیات را ندارید")
                }
                else{
                  console.log(err);
                }
            }
          });
    }
}