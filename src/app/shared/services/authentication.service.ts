import { Injectable, EventEmitter } from '@angular/core';
import { Headers } from '@angular/http';
import { UserManager, User } from 'oidc-client';
import { LocalStorageService } from "./local.storage.service";
import { config, ACCESS_TOKEN_NAME } from "./configuration";

@Injectable()
export class AuthenticationService {
    loggedIn: boolean = false;
    userLoadededEvent: EventEmitter<User> = new EventEmitter<User>();
    currentUser: User;
    authHeaders: Headers;
    userManager: UserManager;

    constructor(private localStorageService: LocalStorageService) {
                    this.userManager = new UserManager(config);
    }

    login() {
        var userManager = this.userManager;
        userManager.signinRedirectCallback().then(user => {
            localStorage.setItem(ACCESS_TOKEN_NAME, user.access_token);
        }).catch(() => {
            userManager.signinRedirect().then(() =>  {
            }).catch(() => {
                userManager.revokeAccessToken()
            })
        });
    }

    logout() {
        this.userManager.signoutRedirect();
    }

    isLoggedIn() {
        return this.localStorageService.exists(ACCESS_TOKEN_NAME);
    }

    getToken() {
        return this.localStorageService.getItem(ACCESS_TOKEN_NAME);
    }
}