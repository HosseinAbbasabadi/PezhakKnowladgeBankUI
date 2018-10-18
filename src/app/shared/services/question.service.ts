import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

import { CreateQuestion, AddVote } from "../command";
import { QuestionModel, QuestionDetailsModel } from "../model";
import { ContainsTrueAnswer } from "../command/contains.true.answer";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";
import { ServiceBase } from "./service.base";


@Injectable()
export class QuestionService extends ServiceBase {

    constructor(private readonly httpService: HttpService) {
        super(environment.forum_api_url, "Question")
    }

    CreateQuestion(command: CreateQuestion) {
        return this.httpService.post<any>(this.pathFactory(), command);
    }

    getQuestion() {
        return this.httpService.getAll<Array<QuestionModel>>(this.pathFactory());
    }

    getQuestionDetails(id: number) {
        return this.httpService.get<QuestionDetailsModel>(this.pathFactory(), id);
    }

    addVote(command: AddVote) {
        var action = "AddVote";
        return this.httpService.put(this.pathFactory(action), command);
    }

    ContainsTrueAnswer(command: ContainsTrueAnswer) {
        var action = "ContainsTrueAnswer";
        return this.httpService.put(this.pathFactory(action), command);
    }
}