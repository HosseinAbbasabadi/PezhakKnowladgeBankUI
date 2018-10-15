import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authenticationService: AuthenticationService) { }
    canActivate() {
        if(this.authenticationService.isLoggedIn())
        {
            return true;
        }
        else
        {
            this.authenticationService.login();
        }
    }
}