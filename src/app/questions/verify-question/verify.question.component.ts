import { Component, OnInit } from "@angular/core";
import { QuestionService, TagService, CreateTag, GetRouteValuesService, QuestionDetailsModel, VerifyQuestion, ModifyQuestion } from "../../shared";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "verify-question",
    templateUrl: "verify.question.component.html",
    styleUrls: ["verify.question.component.css"],
    providers: [ TagService, QuestionService, GetRouteValuesService ]
})

export class VerifyQuestionComponent implements OnInit {
    question = new QuestionDetailsModel();
    newQuestion = new ModifyQuestion();
    tagToCreate = new CreateTag();
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    editorConfig = {
        editable: true,
        spellcheck: true,
        height: '10rem',
        minHeight: '10rem',
        placeholder: 'متن سوال',
        translate: 'no'
    };

    constructor(private readonly tagService: TagService,
                private readonly questionService: QuestionService,
                private readonly getRouteValuesService: GetRouteValuesService,
                private readonly router: Router) {
    }

    ngOnInit() {
        var questionId = this.getRouteValuesService.getId();
        this.getQuestionDetails(questionId);
        this.getTags();
        
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            enableCheckAll: false
        };
    }

    createTag(command: CreateTag) {
        this.tagService.create(command).subscribe(() => {
            this.ngOnInit();
            this.tagToCreate.name = "";
        });
    }

    getQuestionDetails(questionId: number) {
        this.questionService.getQuestionDetails(questionId).subscribe(data => {
            this.question = data;
            this.newQuestion.id = data.id;
            this.newQuestion.title = data.title;
            this.newQuestion.body = data.body;
            this.selectedItems = data.tags;
        })
    }

    getTags() {
        this.tagService.getTags().then(data => {
            this.dropdownList = data;
        });
    }

    modify(question: QuestionDetailsModel) {
        if(!confirm("آیا از اعمال اصلاحات انجام شده اطمینان دارید؟")) return;
        this.newQuestion.id = question.id;
        this.newQuestion.title = question.title;
        this.newQuestion.body = question.body;
        this.newQuestion.tags = this.mapTags();
        this.questionService.modifyQuestion(this.newQuestion).subscribe(() => {
            this.ngOnInit();
        });
    }

    private mapTags() {
        var questionTags = new Array<number>(); 
        this.selectedItems.forEach(x => {
            questionTags.push(x.id);
        })
        return questionTags;
    }

    verify(questionId: number) {
        if(!confirm("در صورت تایید، سوال به صورت عمومی قابل پاسخ خواهد بود. آیا از انجام عملیات مطمئنید؟")) return;
        var command = new VerifyQuestion(questionId);
        this.questionService.verifyQuestion(command).subscribe(data => {
            this.router.navigateByUrl("/notificatiothis.questionService.verifyQuestiontitle question.ns");
        });
    }
}