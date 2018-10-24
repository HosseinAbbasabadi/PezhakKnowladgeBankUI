import { Component, OnInit } from "@angular/core";
import { UserService, QuestionModel, PushNotificationService, PullNotificationService, AuthenticationService, LocalStorageService, ACCESS_TOKEN_NAME} from "../shared";
import { TimeInterval } from 'rxjs';
import { map } from 'rxjs/operators';
import { interval } from "rxjs/observable/interval";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    providers: [ UserService, PullNotificationService, AuthenticationService, LocalStorageService ]
})

export class HeaderComponent implements OnInit{
    userFullName: string;
    searchExpression: string;
    searchResult = new Array<QuestionModel>();
    notificationsCount: number;

    constructor(private readonly userService: UserService, 
                private readonly pullNotificationService: PullNotificationService,
                private readonly authService: AuthenticationService,
                private localStorageService: LocalStorageService) {

    }

    ngOnInit(): void {
        this.getUserFullName();
        this.getUserNotificationsCount();
        const notificationData = interval(15000);
        notificationData.subscribe(n =>  this.getUserNotificationsCount());
    }

    getUserFullName() {
        this.userService.getUserFullName().subscribe(data => {
            this.userFullName = data;
        });
    }

    getUserNotificationsCount() {
        this.pullNotificationService.getUserNotificationsCount().subscribe(data => {
            this.notificationsCount = data;
        });
    }

    signout() {
        if(confirm("آیا از خروج اطمینان دارید؟" )) {
            this.localStorageService.removeItem(ACCESS_TOKEN_NAME);
            this.authService.logout();
        }
    }
}