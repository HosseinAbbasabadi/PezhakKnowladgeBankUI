import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuestionService, CreateQuestion, Tag, TagService } from "../../shared";
import { Select2OptionData } from 'ng2-select2';

@Component({
    moduleId: module.id,
    selector: "add-question",
    templateUrl: "add-question.component.html",
    styleUrls: ["add-question.component.css"],
    providers: [ QuestionService, TagService ]
})

export class AddQuestionComponent implements OnInit {
    question = new CreateQuestion();
    tags: number[];
    exampleData = new Array<Select2OptionData>();
    options: Select2Options;
    editorConfig = {
        editable: true,
        spellcheck: true,
        height: '10rem',
        minHeight: '10rem',
        placeholder: 'متن سوال',
        translate: 'no',
    };

    constructor(private readonly questionService: QuestionService,
                private readonly router: Router,
                private readonly tagService: TagService) {
    }

    ngOnInit(){
        this.options = {
            multiple: true
        }
        var tags = this.tagService.getTags();
        tags.forEach(tag => {
            this.exampleData.push({ id: tag.id.toString(), text: tag.name });
        });
    }

    create(command: CreateQuestion){
        command.tags = this.tags;
        this.questionService.CreateQuestion(command).subscribe(data => {
            this.router.navigateByUrl("/");
        });
    }

    changed(data: {value: number[]}) {
        this.tags = data.value;
    }
}