import { Component, OnInit } from "@angular/core";
import { QuestionService, QuestionModel, SharedDataService } from "../shared";
import { AddView } from "../shared/command/add-view";
import { UserManager } from "oidc-client";

@Component({
    moduleId: module.id,
    selector: "dashboard",
    styleUrls: ["dashboard.component.css"],
    templateUrl: "dashboard.component.html",
    providers: [ QuestionService, SharedDataService ]
})

export class DashboardComponent implements OnInit {
    questions: QuestionModel[];
    
    constructor(private readonly questionService: QuestionService,
                private readonly sharedDataService: SharedDataService) {
        
    }

    ngOnInit(): void {
        this.sharedDataService.sharedData.subscribe(data => {
            this.questions = data;
        });
        this.getQuestions();
    }
    
    getQuestions() {
        this.questionService.getQuestion().subscribe(data => {
            this.questions = data;
        })
    }
    

    addView(questionId: number) {
        var command= new AddView(questionId);
        this.questionService.addView(command).subscribe(() => {})
    }
}