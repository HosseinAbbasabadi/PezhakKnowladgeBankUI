import { Component, OnInit } from "@angular/core";
import { config, ACCESS_TOKEN_NAME } from "../shared";
import { UserManager } from 'oidc-client';
import { Router, ActivatedRoute  } from "@angular/router";
// import { config, ACCESS_TOKEN_NAME } from "../shared/services/configuration";

@Component({
    selector: "app-callback",
    templateUrl: "./callback.component.html",
    styleUrls: ["./callback.component.css"]
})

export class CallbackComponent {
    userManager: UserManager;

    constructor(router: Router) {
        this.userManager = new UserManager(config);
        this.userManager.signinRedirectCallback().then(function(user) {
            localStorage.setItem(ACCESS_TOKEN_NAME, user.access_token);
            router.navigateByUrl("");
        });
    }
}