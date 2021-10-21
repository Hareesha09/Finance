import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmpType, PropName } from '../Models/LoanDetails';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  msg : string='Income Details Added..!';

  propertyN:PropName[]=[
    {PropN:'Villa'},{PropN:'Flat'},{PropN:'House'}
  ];

  emptype:EmpType[]=[
    {EmpT:'Salarised'},{EmpT:'Self-Employed'}
  ];
  
  constructor(private service:SharedService,private SpinnerService: NgxSpinnerService) { }

  @Input()
  PropertyLocation:string;
  PropertyName:string;
  EstimatedAmount:number;
  EmploymentType:string;
  RetirementAge:number;
  EmployerName:string;
  
  ngOnInit(): void {
  }


  alertMsg(){
    alert(this.msg);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.PropertyLocation=' ',
      this.PropertyName =' ',
      this.EstimatedAmount = 0,
      this.EmploymentType = ' ',
      this.RetirementAge = 0,
      this.EmployerName=' ';
  }

  addIncomeDetails()
  {
    var val = 
            { 
              PropertyLocation:this.PropertyLocation,
              PropertyName:this.PropertyName,
              EstimatedAmount:this.EstimatedAmount,
              EmploymentType:this.EmploymentType,
              RetirementAge:this.RetirementAge,
              EmployerName:this.EmployerName
            };
              this.service.addIncomeDetails(val).subscribe(res=>{
              this.alertMsg();
              this.resetForm();
            });
  }

  

}






