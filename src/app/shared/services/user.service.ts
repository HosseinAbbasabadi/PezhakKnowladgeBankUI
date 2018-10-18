import { Injectable, Inject } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "../../../environments/environment";
import { ServiceBase } from "./service.base";

@Injectable()
export class UserService extends ServiceBase {

    constructor(private readonly httpService: HttpService) {
        super(environment.forum_api_url, "Identity");
    }

    getUserFullName() {
        return this.httpService.getAll<string>(this.pathFactory());
    }
}