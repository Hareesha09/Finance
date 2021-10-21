import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationComponent } from './application/application.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedService } from './shared.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoanDetailsComponent } from './application/loan-details/loan-details.component';
import { PersonalDetailsComponent } from './application/personal-details/personal-details.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { DocumentUploadComponent } from './application/document-upload/document-upload.component';
import { MessageService } from './msg/message.service';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EditPersonalDetailsComponent } from './user/dashboard/edit-personal-details/edit-personal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent,
    CalculatorComponent,
    ApplicationComponent,
    LoanDetailsComponent,
    PersonalDetailsComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    AdminDashComponent,
    DocumentUploadComponent,
    EditPersonalDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [SharedService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
