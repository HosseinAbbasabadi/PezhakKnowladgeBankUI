import { Component, OnInit } from "@angular/core";
import { UserService, QuestionModel, PushNotificationService, PullNotificationService} from "../shared";
import { TimeInterval } from 'rxjs';
import { map } from 'rxjs/operators';
import { interval } from "rxjs/observable/interval";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    providers: [ UserService, PushNotificationService, PullNotificationService ]
})

export class HeaderComponent implements OnInit{
    userFullName: string;
    searchExpression: string;
    searchResult = new Array<QuestionModel>();
    notifications = new Array<any>();

    constructor(private readonly userService: UserService, 
                private readonly pullNotificationService: PullNotificationService,
                private readonly pushNotificationService: PushNotificationService) {

    }

    ngOnInit(): void {
        this.getUserFullName();
        this.getAddedAnswerNotifications();
        const notificationData = interval(15000);
        notificationData.subscribe(n =>  this.getAddedAnswerNotifications());
    }

    getUserFullName() {
        this.userService.getUserFullName().subscribe(data => {
            this.userFullName = data;
        });
    }

    getAddedAnswerNotifications() {
        this.pullNotificationService.getAnswerAddedNotifications().subscribe(data => {
            this.notifications = data;
        })
    }

    clearNotifications(id: string) {
        this.pushNotificationService.clearNotifications(id).subscribe(data => {
            this.getAddedAnswerNotifications();
        });
    }
}