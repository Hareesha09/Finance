import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonalDetails} from './Models/UserOp';
import { IncomeDetails } from './Models/IncomeDetail';
import { LoanDetails } from './Models/LoanDetails';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  readonly APIUrl="http://localhost:31936/api";

  LoginUser(val:any){
    return this.http.post(this.APIUrl+'/Application'+'/UserLogin',val);
  }

  LoginAdmin(val:any){
    return this.http.post(this.APIUrl+'/Application'+'/AdminLogin',val);
  }
  
  addIncomeDetails(val:any){
    return this.http.post(this.APIUrl+'/IncomeDetails',val);
  }

  addLoanDetails(val:any){
    return this.http.post(this.APIUrl+'/LoanDetails',val);
  }

  addPersonalDetails(val:any){
    return this.http.post(this.APIUrl+'/PersonalDetails',val);
  }

  ///////

  getUersList():Observable<PersonalDetails[]>{
    return this.http.get<PersonalDetails[]>(this.APIUrl+'/PersonalDetails'+'/List');
  }

  getProductDetailsById(id: number): Observable<PersonalDetails> {
    return this.http.get<PersonalDetails>(this.APIUrl+'/PersonalDetails'+ '/Details?id=' + id);
  }

  getIncomeDetailsById(id: number): Observable<IncomeDetails> {
    return this.http.get<IncomeDetails>(this.APIUrl+'/IncomeDetails'+ '/Details?id=' + id);
  }

  getLoanDetailsById(id: number): Observable<LoanDetails> {
    return this.http.get<LoanDetails>(this.APIUrl+'/LoanDetails'+ '/Details?id=' + id);
  }
  
  UpdateUser(personalDetails: PersonalDetails): Observable<PersonalDetails> {
    const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.put<PersonalDetails>(this.APIUrl+'/PersonalDetails'+ '/UpdatePersonal?id=' + personalDetails.UserId, personalDetails, httpHeaders);
  }

}
