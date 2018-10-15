import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "../../../environments/environment";

@Injectable()
export class NotificationService {
    
    pullNotificationControllerName = "PullNotification";
    pushNotificationControllerName = "PushNotification";
    constructor(private readonly httpService: HttpService) {
    }

    getAnswerAddedNotifications() {
        var action = "AnswerAddedNotifications";
        this.httpService.ajax_url = environment.notification_api_url;
        return this.httpService.getAll<any>(this.pullNotificationControllerName + "/" + action);
    }

    clearNotifications(type: string) {
        var action = "ClearNotifications";
        this.httpService.ajax_url = environment.notification_api_url;
        return this.httpService.put(this.pushNotificationControllerName + "/" + action + "/" + type);
    }
}