import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { QuestionService, CreateQuestion, TagService, Tag } from "../../shared";

@Component({
    moduleId: module.id,
    selector: "add-question",
    templateUrl: "add-question.component.html",
    styleUrls: ["add-question.component.css"],
    providers: [ QuestionService, TagService ]
})

export class AddQuestionComponent implements OnInit {
    dropdownList = [];
    dropdownSettings = {};
    questionTags = new Array<number>();
    question = new CreateQuestion();
    selectedTags = new Array<Tag>();
    options: Select2Options;

    editorConfig = {
        editable: true,
        spellcheck: true,
        height: '10rem',
        minHeight: '10rem',
        placeholder: 'متن سوال',
        translate: 'no'
    };

    constructor(private readonly questionService: QuestionService,
                private readonly router: Router,
                private readonly route: ActivatedRoute,
                private readonly tagService: TagService) {
    }

    ngOnInit() {
        this.options = {
            multiple: true,
            closeOnSelect: false
        }
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

    getTags() {
        this.tagService.getTags().then(data => {
            this.dropdownList = data;
        });
    }

    create(command: CreateQuestion){
        command.tags = this.mapTags();
        this.questionService.CreateQuestion(command).subscribe(data => {
            this.router.navigateByUrl("/");
        });
    }

    private mapTags() {
        var questionTags = new Array<number>();
        this.selectedTags.forEach(x => {
            questionTags.push(x.id);
        })
        return questionTags;
    }
}