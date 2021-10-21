import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonalDetails } from 'src/app/Models/UserOp';
import { MessageService } from 'src/app/msg/message.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public EmailID;
  productForm: any;
  name:string;
  UserList: Observable<PersonalDetails[]>;
  UserList1: Observable<PersonalDetails[]>;
  UserId = 0;
  massage = "";
  

  constructor(private router : Router,private msgService:MessageService,private service:SharedService,private formbulider: FormBuilder) { 
    this.EmailID = this.msgService.getOption();  
  }
  ngOnInit(): void {
    this.productForm = this.formbulider.group({
      Name: ['', [Validators.required]],
      mailID: ['', [Validators.required]],
      PhoneNo: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Nationality: ['', [Validators.required]],
      AdhaarNo: ['', [Validators.required]],
      PanNo: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      LoanStaus: ['', [Validators.required]]
    });
    this.getUserPersonalDetailsList();

  }

  getUserPersonalDetailsList() {
    
    this.UserList = this.service.getUersList();
    this.UserList1 = this.UserList;
    this.name =  this.EmailID.size;
  }

  ProductDetailsToEdit(id: number) {
    this.service.getProductDetailsById(id).subscribe(personalDetails => {
      this.UserId = personalDetails.UserId;
      this.productForm.controls['Name'].setValue(personalDetails.Name);
      this.productForm.controls['mailID'].setValue(personalDetails.MailID);
      this.productForm.controls['PhoneNo'].setValue(personalDetails.PhoneNo);
      this.productForm.controls['Gender'].setValue(personalDetails.Gender);
      this.productForm.controls['Nationality'].setValue(personalDetails.Nationality);
      this.productForm.controls['AdhaarNo'].setValue(personalDetails.AdhaarNo);
      this.productForm.controls['PanNo'].setValue(personalDetails.PanNo);
      this.productForm.controls['Amount'].setValue(personalDetails.amount);
      this.productForm.controls['LoanStaus'].setValue(personalDetails.loanStaus);

      // this.productForm.controls['product_category'].setValue(productResult.productCost);
    });
  }
  UpdateProduct(personalDetails: PersonalDetails) {
    personalDetails.UserId = this.UserId;
    const product_Master = this.productForm.value;
    this.service.UpdateUser(product_Master).subscribe(() => {
      alert('Record Updated Successfully');
      this.getUserPersonalDetailsList();
    });
  }

 

  logout()
  {
    sessionStorage.getItem('email');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
