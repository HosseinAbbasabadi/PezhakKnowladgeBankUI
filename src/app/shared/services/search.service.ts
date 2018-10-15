import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { QuestionModel } from "../model";
import { environment } from "../../../environments/environment";

@Injectable()
export class SearchService {
    searchControllerName = "Search";

    constructor(private readonly httpService: HttpService) {
        this.httpService.ajax_url = environment.forum_api_url;
    }

    search(searchExpression: string) {
        return this.httpService.getAll<Array<QuestionModel>>(this.searchControllerName + "?expression=" + searchExpression);
    }
}