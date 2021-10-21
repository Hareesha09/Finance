import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  msg : string='Loan Details Added..!';

  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }

  @Input()
  MaxLoanGrant:number;
  InterestRate:number;
  Tenure:number;
  LoanAmount:number;

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.MaxLoanGrant= 0,
      this.InterestRate= 0,
      this.Tenure= 0,
      this.LoanAmount= 0;
  }

  alertMsg(){
    alert(this.msg);
  }

  addLoanDetails()
  {
   
    var val = 
            {
              MaxLoanGrant:this.MaxLoanGrant,
              InterestRate:this.InterestRate,
              Tenure:this.Tenure,
              LoanAmount:this.LoanAmount
            };
              this.service.addLoanDetails(val).subscribe(res=>{
              this.alertMsg();
              this.resetForm();
            });
  }

}
