import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IncomeDetails } from '../Models/IncomeDetail';
import { PersonalDetails } from '../Models/UserOp';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  [x: string]: any;
  name:string='tushar@gmail.com';
  UserList: Observable<PersonalDetails[]>;
  UserList1: Observable<PersonalDetails[]>;
  UserId = 0;
  massage = "";
  
  appid:string;

  productForm: any;
  productForm_income: any;
  productForm_loan: any;


  constructor(private formbulider: FormBuilder, private httpClient: HttpClient,
              private service:SharedService,private router : Router) { }

  ngOnInit(): void {
    this.productForm = this.formbulider.group({
      Name: ['', [Validators.required]],
      mailID: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      PhoneNo: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Nationality: ['', [Validators.required]],
      AdhaarNo: ['', [Validators.required]],
      PanNo: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      LoanStaus: ['', [Validators.required]],
      ApplicationId: ['', [Validators.required]],
      Remark: ['', [Validators.required]]
    });
    this.getUserPersonalDetailsList();
    this.productForm_income = this.formbulider.group({
      PropertyLocation: ['', [Validators.required]],
      PropertyName: ['', [Validators.required]],
      EstimatedAmount: ['', [Validators.required]],
      EmploymentType: ['', [Validators.required]],
      RetirementAge: ['', [Validators.required]],
      Nationality: ['', [Validators.required]],
      EmployerName: ['', [Validators.required]],
    });

    this.productForm_loan = this.formbulider.group({
      MaxLoanGrant: ['', [Validators.required]],
      InterestRate: ['', [Validators.required]],
      EstimatedAmount: ['', [Validators.required]],
      Tenure: ['', [Validators.required]],
      LoanAmount: ['', [Validators.required]]
    });
    
  }

  getUserPersonalDetailsList() {
    this.UserList = this.service.getUersList();
    this.UserList1 = this.UserList;
  }
  Genrate () { 
    alert('Applciation Id Genrated...')
    this.appid = Math.random().toString(36).substr(2, 9);
    this.productForm.controls['ApplicationId'].setValue(this.appid);
  };


  logout()
  {
    sessionStorage.getItem('email');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  ProductDetailsToEdit(id: number) {
    this.service.getProductDetailsById(id).subscribe(personalDetails => {
      this.UserId = personalDetails.UserId;
      this.productForm.controls['Name'].setValue(personalDetails.Name);
      this.productForm.controls['mailID'].setValue(personalDetails.MailID);
      this.productForm.controls['Password'].setValue(personalDetails.Password);
      this.productForm.controls['PhoneNo'].setValue(personalDetails.PhoneNo);
      this.productForm.controls['Gender'].setValue(personalDetails.Gender);
      this.productForm.controls['Nationality'].setValue(personalDetails.Nationality);
      this.productForm.controls['AdhaarNo'].setValue(personalDetails.AdhaarNo);
      this.productForm.controls['PanNo'].setValue(personalDetails.PanNo);
      this.productForm.controls['Amount'].setValue(personalDetails.amount);
      this.productForm.controls['LoanStaus'].setValue(personalDetails.loanStaus);
      this.productForm.controls['ApplicationId'].setValue(personalDetails.ApplicationId);
      this.productForm.controls['Remark'].setValue(personalDetails.Remark);


    });

  }

  IncomeDetailsToEdit(id: number) {
    this.service.getIncomeDetailsById(id).subscribe(incomeDetails => {
      this.UserId = incomeDetails.IncomeDeatilsId;
      this.productForm_income.controls['PropertyLocation'].setValue(incomeDetails.PropertyLocation);
      this.productForm_income.controls['PropertyName'].setValue(incomeDetails.PropertyName);
      this.productForm_income.controls['EstimatedAmount'].setValue(incomeDetails.EstimatedAmount);
      this.productForm_income.controls['EmploymentType'].setValue(incomeDetails.EmploymentType);
      this.productForm_income.controls['RetirementAge'].setValue(incomeDetails.RetirementAge);
      this.productForm_income.controls['EmployerName'].setValue(incomeDetails.EmployerName);
    });
  }

  LoanDetailsToEdit(id: number) {
    this.service.getLoanDetailsById(id).subscribe(loanDetails => {
      this.UserId = loanDetails.LoanId;
      this.productForm_loan.controls['MaxLoanGrant'].setValue(loanDetails.MaxLoanGrant);
      this.productForm_loan.controls['InterestRate'].setValue(loanDetails.InterestRate);
      this.productForm_loan.controls['Tenure'].setValue(loanDetails.Tenure);
      this.productForm_loan.controls['LoanAmount'].setValue(loanDetails.LoanAmount);
      alert('All Information Display In Below Cards...');
    });
  }



  UpdateUser(personalDetails: PersonalDetails) {
    personalDetails.UserId = this.UserId;
    personalDetails = this.productForm.value;
    this.service.UpdateUser(personalDetails).subscribe(() => {
      alert('fund Tranfer Successfully....');
      this.getUserPersonalDetailsList();
    });
  }

 


}
