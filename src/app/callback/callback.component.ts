import { Component, OnInit, OnChanges } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "callback",
    templateUrl: "callback.component.html",
    providers: [ ]
})


export class CallBack implements OnInit, OnChanges {
    ngOnChanges(): void {
        
    }
    
    constructor(private router: Router) {
    }
    
    ngOnInit(): void {
        
    }
}