import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RightMenuComponent } from "./right-menu/right-menu.component";
import { SearchComponent } from "./search/search.component";
import {
  HttpService,
  AuthGuardService,
  AuthenticationService,
  LocalStorageService,
  SecurityInterceptor,
} from "./shared";

import { QuestionsModule } from "./questions";
import { LoadingPageModule } from 'angular-loading-page';
import { MaterialBarModule } from 'angular-loading-page';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notifications/notification.component';
import { CallbackComponent } from './callback/callback.component';

const appRoute: ModuleWithProviders = RouterModule.forRoot([
  { path: "", component: DashboardComponent },
  { path: "search/:expression", component: SearchComponent },
  { path: "notifications", component: NotificationComponent },
  { path: "callback", component: CallbackComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    RightMenuComponent,
    SearchComponent,
    NotificationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    appRoute,
    QuestionsModule,
    HttpClientModule,
    HttpModule,
    LoadingPageModule,
    MaterialBarModule,
    FormsModule
  ],
  providers: [ 
    HttpService,
    AuthenticationService, 
    AuthGuardService, 
    LocalStorageService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true 
    }
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
