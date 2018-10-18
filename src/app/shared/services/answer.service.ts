import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";
import { AddAnswer, ChosenAnswer } from "../command";
import { AnswerModel } from "../model";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";
import { ServiceBase } from "./service.base";


@Injectable()
export class AnswerService extends ServiceBase {

    constructor(private readonly httpService: HttpService){
        super(environment.forum_api_url, "Answer");
    }

    addAnswer(command: AddAnswer) {
        return this.httpService.post<any>(this.pathFactory(), command);
    }

    getAnswers(questionId: number) {
        return this.httpService.get<Array<AnswerModel>>(this.pathFactory(), questionId);
    }

    setAsChosenAnswer(command: ChosenAnswer) {
        var action = "SetAsChosenAnswer";
        return this.httpService.post<any>(this.pathFactory(action), command);
    }
}