import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplicationComponent } from './application/application.component';
import { LoanDetailsComponent } from './application/loan-details/loan-details.component';
import { PersonalDetailsComponent } from './application/personal-details/personal-details.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { DocumentUploadComponent } from './application/document-upload/document-upload.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EditPersonalDetailsComponent } from './user/dashboard/edit-personal-details/edit-personal-details.component';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'home', component: HomeComponent},
  {path:'faq', component: FaqComponent},
  {path:'calculator', component: CalculatorComponent},
  {path:'application', component: ApplicationComponent},
  {path:'loan-details', component: LoanDetailsComponent},
  {path:'personal-details', component: PersonalDetailsComponent},
  {path:'document-upload', component: DocumentUploadComponent},
  {path:'document-upload', component: DocumentUploadComponent},

  {path:'dashboard', component: DashboardComponent},

  
{
  path: 'dashboard', component: DashboardComponent,
  children: [{ path: '', component: EditPersonalDetailsComponent }]
},


{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
},


{path:'admin-dash', component: AdminDashComponent},
{
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
},

{ path : '', redirectTo:'/login', pathMatch : 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
