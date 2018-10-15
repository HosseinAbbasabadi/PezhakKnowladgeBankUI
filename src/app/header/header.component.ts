import { Component, OnInit } from "@angular/core";
import { UserService, QuestionModel, NotificationService} from "../shared";
import { TimeInterval } from 'rxjs';
import { map } from 'rxjs/operators';
import { interval } from "rxjs/observable/interval";

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
    notifications = new Array<any>();

    constructor(private readonly userService: UserService, 
                private readonly notificationService: NotificationService) {

    }

    ngOnInit(): void {
        this.getUserFullName();
        this.getAddedAnswerNotifications();
        interval(1000).pipe(
            map(() => { this.getAddedAnswerNotifications(); })
          );
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