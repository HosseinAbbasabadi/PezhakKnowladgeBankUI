import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "../../../environments/environment";
import { ServiceBase } from "./service.base";

@Injectable()
export class PullNotificationService extends ServiceBase {
    
    constructor(private readonly httpService: HttpService) {
        super(environment.notification_api_url, "PullNotification");
    }

    getAnswerAddedNotifications() {
        var action = "GetAnswerAdded";
        return this.httpService.getAll<any>(this.pathFactory(action));
    }

    getQuestionCreatedNotifications() {
        var action = "GetQuestionCreated";
        return this.httpService.getAll<any>(this.pathFactory(action));
    }

    getUserNotificationsCount() {
        var action = "GetNotificationsCount";
        return this.httpService.getAll<any>(this.pathFactory(action));
    }

    getAnswerChoosedNotifications() {
        var action = "GetAnswerChoosed";
        return this.httpService.getAll<any>(this.pathFactory(action));
    }
}