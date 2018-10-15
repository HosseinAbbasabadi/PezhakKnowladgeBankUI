import { Component, OnInit } from "@angular/core";
import {  QuestionModel, SharedDataService, SearchService, GetRouteValuesService } from "../shared";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { debounceTime } from "rxjs/operators";

@Component({
    moduleId: module.id,
    selector: "search",
    styleUrls: ["../dashboard/dashboard.component.css"],
    templateUrl: "search.component.html",
    providers: [ SearchService, SharedDataService, GetRouteValuesService ]
})

export class SearchComponent implements OnInit {
    questions = new Array<QuestionModel>();
    expression: string;

    constructor(private readonly getRouteValues: GetRouteValuesService,
                private readonly searchService: SearchService,
                private readonly router: Router) { 
                    router.events.subscribe(event => {
                        this.expression = this.getRouteValues.getSearchExpression();
                        if (event instanceof NavigationEnd) {
                            this.ngOnInit();
                        }
                    });
                }

    ngOnInit(): void {
        this.search(this.expression);
    }

    search(searchExpression: string) {
        this.searchService.search(searchExpression).subscribe(data => {
            this.questions = data;
        }); 
    }
}