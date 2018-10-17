import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

import { CreateQuestion, AddVote } from "../command";
import { QuestionModel, QuestionDetailsModel } from "../model";
import { ContainsTrueAnswer } from "../command/contains.true.answer";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";


@Injectable()
export class QuestionService{
    questionControllerName = "Question";

    constructor(private readonly httpService: HttpService) {
        this.httpService.ajax_url = environment.forum_api_url;
    }

    CreateQuestion(command: CreateQuestion) {
        return this.httpService.post<any>(this.questionControllerName, command);
    }

    getQuestion() {
        return this.httpService.getAll<Array<QuestionModel>>(this.questionControllerName);
    }

    getQuestionDetails(id: number) {
        return this.httpService.get<QuestionDetailsModel>(this.questionControllerName, id);
    }

    addVote(command: AddVote) {
        var action = "AddVote";
        return this.httpService.put(this.questionControllerName + "/" + action, command);
    }

    ContainsTrueAnswer(command: ContainsTrueAnswer) {
        var action = "ContainsTrueAnswer";
        return this.httpService.put(this.questionControllerName + "/" + action, command);
    }
}