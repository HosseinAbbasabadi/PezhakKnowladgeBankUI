import { Component, OnInit } from "@angular/core";
import { PullNotificationService, PushNotificationService } from "../shared";

@Component({
    selector: "app-notificaitons",
    templateUrl: "./notification.component.html",
    styleUrls: ["./notification.component.css"],
    providers: [ PullNotificationService, PushNotificationService ]
})

export class NotificationComponent implements OnInit {
    answerAddedNotifications = new Array<any>();
    questionCreatedNotifications = new Array<any>();
    answerChoosedNotifications = new Array<any>();

    constructor(private readonly pullNotificationService: PullNotificationService,
                private readonly pushNotificationService: PushNotificationService) {
    }

    ngOnInit(): void {
        this.loadNotificaitons();
    }

    loadNotificaitons() {
        this.getAddedAnswerNotifications();
        this.getQuestionCreatedNotifications();
        this.getAnswerChoosedNotifications();
    }

    getAddedAnswerNotifications() {
        this.pullNotificationService.getAnswerAddedNotifications().subscribe(notifications => {
            this.answerAddedNotifications = notifications;
        });
    }

    getQuestionCreatedNotifications() {
        this.pullNotificationService.getQuestionCreatedNotifications().subscribe(notifications => {
            this.questionCreatedNotifications = notifications;
        });
    }

    getAnswerChoosedNotifications() {
        this.pullNotificationService.getAnswerChoosedNotifications().subscribe(notifications => {
           this.answerChoosedNotifications = notifications; 
        });
    }

    clearNotification(id: string) {
        if(confirm("آیا از حذف این اعلانیه اطمینان دارید؟")){
            this.pushNotificationService.clearNotifications(id).subscribe(() => {
                this.loadNotificaitons();
            });
        }
    }
}