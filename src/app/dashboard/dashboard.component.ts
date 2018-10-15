import { Component, OnInit } from "@angular/core";
import { QuestionService, QuestionModel, UserService, SharedDataService } from "../shared";

@Component({
    moduleId: module.id,
    selector: "dashboard",
    styleUrls: ["dashboard.component.css"],
    templateUrl: "dashboard.component.html",
    providers: [ QuestionService, SharedDataService ]
})

export class DashboardComponent implements OnInit {
    questions = new Array<QuestionModel>();
    
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
    
}