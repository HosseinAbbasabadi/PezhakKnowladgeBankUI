import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";
import { AddAnswer, ChosenAnswer } from "../command";
import { AnswerModel } from "../model";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";


@Injectable()
export class AnswerService {
    answerControllerName = "Answer";

    constructor(private readonly httpService: HttpService){
        this.httpService.ajax_url = environment.forum_api_url;
    }

    addAnswer(command: AddAnswer) {
        return this.httpService.post<any>(this.answerControllerName, command);
    }

    getAnswers(questionId: number) {
        return this.httpService.get<Array<AnswerModel>>(this.answerControllerName, questionId);
    }

    setAsChosenAnswer(command: ChosenAnswer) {
        var action = "SetAsChosenAnswer";
        var path = this.answerControllerName + "/" + action;
        return this.httpService.post<any>(path, command);
    }
}