import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { QuestionModel } from "../model";
import { environment } from "../../../environments/environment";
import { ServiceBase } from "./service.base";

@Injectable()
export class SearchService extends ServiceBase {

    constructor(private readonly httpService: HttpService) {
        super(environment.forum_api_url, "Search");
    }

    search(searchExpression: string) {
        return this.httpService.getAll<Array<QuestionModel>>(this.pathFactory() + "?expression=" + searchExpression);
    }
}