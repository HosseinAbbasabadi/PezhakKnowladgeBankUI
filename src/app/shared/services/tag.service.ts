import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Tag } from "../model";
import { CreateTag } from "../command";
import { ServiceBase } from "./service.base";
import { environment } from "../../../environments/environment";

@Injectable()
export class TagService extends ServiceBase {

    constructor(private readonly httpService: HttpService) {
        super(environment.forum_api_url, "Tag")
    }

    getTags() {
        return this.httpService.getAll<Array<Tag>>(this.pathFactory()).toPromise().then(res => res);
    }

    create(command: CreateTag) {
        return this.httpService.post(this.pathFactory(), command);
    }
}