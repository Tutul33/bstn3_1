import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './data.service';
import {PagerService} from './shared/pagerservice';
import { LoginComponent } from './login/login.component'
import * as bootstrap from 'bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    FeedbacksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [HttpClientModule,DataService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
