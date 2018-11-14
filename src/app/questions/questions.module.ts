import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { QuestionsComponent } from "./questions.component";
import { AddQuestionComponent } from "./add-question";
import { QuestionInfoComponent } from "./question-info";

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { NgxEditorModule } from 'ngx-editor';
import {ButtonsModule} from 'ngx-bootstrap';
import { AuthGuardService } from "../shared";
import { ModifyQuestionComponent } from "./modify-question/modify.question.component";

const questionsRoutes: ModuleWithProviders = RouterModule.forChild([
    {
        path: "add-question",
        component: AddQuestionComponent,
        canActivate: [ AuthGuardService ]
    },
    {
        path: "question-info/:id",
        component: QuestionInfoComponent,
        canActivate: [ AuthGuardService ]
    },
    {
        path: "modify-question/:id",
        component: ModifyQuestionComponent,
        canActivate: [ AuthGuardService ]
    }
  ]);

  @NgModule({
    declarations: [
        AddQuestionComponent,
        QuestionInfoComponent,
        QuestionsComponent,
        ModifyQuestionComponent
    ],
    imports: [
      questionsRoutes,
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      BrowserModule,
      NgxEditorModule,
      ButtonsModule,
      NgMultiSelectDropDownModule
    ],
    providers: [
    ]
  })

  export class QuestionsModule {
    
  }