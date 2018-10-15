import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "../../../environments/environment";

@Injectable()
export class NotificationService {
    
    notificationControllerName = "PullNotification";
    constructor(private readonly httpService: HttpService) {
    }

    getAnswerAddedNotifications() {
        var action = "AnswerAddedNotifications";
        this.httpService.ajax_url = environment.notification_api_url;
        return this.httpService.getAll(this.notificationControllerName + "/" + action);
    }
}