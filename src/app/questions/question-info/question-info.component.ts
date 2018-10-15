import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { 
    QuestionService, 
    GetRouteValuesService, 
    QuestionDetailsModel, 
    AddAnswer,
    AnswerService,
    AddVote,
    AnswerModel,
    ChosenAnswer
} from "../../shared";
import { ContainsTrueAnswer } from "../../shared/command/contains.true.answer";

@Component({
    moduleId: module.id,
    selector: "question-info",
    templateUrl: "question-info.component.html",
    styleUrls: ["question-info.component.css"],
    providers: [ QuestionService, GetRouteValuesService, AnswerService ]
})

export class QuestionInfoComponent implements OnInit {
    question = new QuestionDetailsModel();
    answer = new AddAnswer();
    answers = new Array<AnswerModel>();
    questionBodyConfig = {
        editable: false,
        spellcheck: false,
        height: '10rem',
        minHeight: '10rem',
        placeholder: 'متن سوال',
        translate: 'yes',
        enableToolbar: false,
        showToolbar: false,
    };
    addAnswerConfig = {
        editable: true,
        spellcheck: true,
        height: '10rem',
        minHeight: '10rem',
        placeholder: 'متن پاسخ...',
        translate: 'yes',
    };

    constructor(private readonly questionService: QuestionService,
                private readonly getRouteValuesService: GetRouteValuesService,
                private readonly answerService: AnswerService,
                private readonly router: Router) {
    }

    ngOnInit(): void {
        var questionId = this.getRouteValuesService.getId();
        this.getQuestionDetails(questionId);
        this.getAnswers(questionId);
    }

    getQuestionDetails(questionId: number) {
        this.questionService.getQuestionDetails(questionId).subscribe(data => {
            this.question = data;
        })
    }

    addAnswer(command: AddAnswer) {
        command.question = this.question.id;
        this.answerService.addAnswer(command).subscribe(data => {
            this.ngOnInit();
        }, () => alert("مشکلی پیش آمده لطفا دوباره تلاش کنید"));
    }

    vote(opinion: boolean){
        var questionId = this.question.id;
        var command = new AddVote(opinion, questionId);
        this.questionService.addVote(command).subscribe(data => {
            this.ngOnInit();
        });
    }

    getAnswers(questionId: number) {
        this.answerService.getAnswers(questionId).subscribe(data => {
            this.answers = data;
        })
    }

    setAsChosenAnswer(answerId: number) {
        var command = new ChosenAnswer(answerId, this.question.inquirerId, this.question.id);
        this.answerService.setAsChosenAnswer(command).subscribe(() => {
                this.ngOnInit();
                var command = new ContainsTrueAnswer(this.question.id);
                this.questionService.ContainsTrueAnswer(command).subscribe(() => {
            });
        });
    }
}