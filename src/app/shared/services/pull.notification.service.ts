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
        var action = "AnswerAddedNotifications";
        return this.httpService.getAll<any>(this.pathFactory(action) + "/" + action);
    }
}