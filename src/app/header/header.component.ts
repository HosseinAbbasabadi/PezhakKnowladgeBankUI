import { Component, OnInit } from "@angular/core";
import { UserService, QuestionModel, NotificationService} from "../shared";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    providers: [ UserService, NotificationService ]
})

export class HeaderComponent implements OnInit{
    userFullName: string;
    searchExpression: string;
    searchResult = new Array<QuestionModel>();
    notifications: any;

    constructor(private readonly userService: UserService, 
                private readonly notificationService: NotificationService) {

    }

    ngOnInit(): void {
        this.getUserFullName();
        this.getAddedAnswerNotifications();
    }

    getUserFullName() {
        this.userService.getUserFullName().subscribe(data => {
            this.userFullName = data;
        });
    }

    getAddedAnswerNotifications() {
        this.notificationService.getAnswerAddedNotifications().subscribe(data => {
            this.notifications = data;
        })
    }
}