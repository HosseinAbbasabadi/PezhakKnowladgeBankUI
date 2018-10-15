import { Injectable, Inject } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "../../../environments/environment";

@Injectable()
export class UserService {
    identityControllerName = "Identity";

    constructor(private readonly httpService: HttpService) {
        this.httpService.ajax_url = environment.forum_api_url;
    }

    getUserFullName() {
        return this.httpService.getAll<string>(this.identityControllerName);
    }
}