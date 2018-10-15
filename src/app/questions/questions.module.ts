import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { QuestionsComponent } from "./questions.component";
import { CallBack } from "../callback/callback.component";
import { AddQuestionComponent } from "./add-question";
import { QuestionInfoComponent } from "./question-info";
import { Select2Module } from 'ng2-select2';
import { NgxEditorModule } from 'ngx-editor';
import {ButtonsModule} from 'ngx-bootstrap';
import { AuthGuardService } from "../shared";

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
    }
  ]);

  @NgModule({
    declarations: [
        AddQuestionComponent,
        QuestionInfoComponent,
        QuestionsComponent,
        CallBack
    ],
    imports: [
      questionsRoutes,
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      BrowserModule,
      Select2Module,
      NgxEditorModule,
      ButtonsModule
    ],
    providers: [
    ]
  })

  export class QuestionsModule {
    
  }