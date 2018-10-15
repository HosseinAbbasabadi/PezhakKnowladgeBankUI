import { Component } from "@angular/core";
import { AuthenticationService, LocalStorageService, ACCESS_TOKEN_NAME } from "../shared";

@Component({
    moduleId: module.id,
    selector: "right-menu",
    templateUrl: "right-menu.component.html",
    styleUrls: ["right-menu.component.css"],
    providers: [ AuthenticationService, LocalStorageService ]
})

export class RightMenuComponent{
    constructor(private readonly authService: AuthenticationService, private localStorageService: LocalStorageService) {
        
    }   

    signout() {
        this.localStorageService.removeItem(ACCESS_TOKEN_NAME);
        this.authService.logout();
    }
}