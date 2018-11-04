import { Injectable, EventEmitter } from '@angular/core';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';
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
        // userManager.signinRedirectCallback().then(function (user){
        //     localStorage.setItem(ACCESS_TOKEN_NAME, user.access_token);
        // }).catch(function(){
        //     userManager.signinRedirect().then(function () {
        //     }).catch(function (){
        //         userManager.revokeAccessToken()
        //     })
        // });

        userManager.signinRedirect().then(function() {

        }).catch(function() {
        })
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