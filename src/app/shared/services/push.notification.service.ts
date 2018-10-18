import { Injectable, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "../../../environments/environment";
import { ServiceBase } from "./service.base";

@Injectable()
export class PushNotificationService extends ServiceBase {
    
    constructor(private readonly httpService: HttpService) {
        super(environment.notification_api_url, "PushNotification");
    }

    clearNotifications(id: string) {
        var action = "ClearNotifications";
        return this.httpService.put(this.pathFactory(action)+ "/" + id);
    }
}