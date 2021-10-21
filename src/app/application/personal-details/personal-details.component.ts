import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenderType } from 'src/app/Models/UserOp';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  msg : string='Personal Details Added..Click Next';

  gendertype:GenderType[]=[
    {GenderT:'Male'},{GenderT:'Female'},{GenderT:'Others'}
  ];

  constructor(private service:SharedService) { }

  @Input()
  Name:string;
  MailID:string;
  Password:string;
  PhoneNo:string;
  Gender:string;
  Nationality:string;
  AdhaarNo:string;
  PanNo:string;
  amount:number=0;
  loanStaus:string;
  ApplcationId:string;
  Remark:string;

  ngOnInit(): void {
  }
  
  alertMsg(){
    alert(this.msg);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.Name= ' ',
      this.MailID=' ',
      this.Gender=' ',
      this.Nationality=' ',
      this.AdhaarNo= ' ',
      this.PanNo= ' ';

  }

  addPersonalDetails()
  {
    var val = 
            {
              Name:this.Name,
              MailID:this.MailID,
              Password:this.Password,
              PhoneNo:this.PhoneNo,
              Gender:this.Gender, 
              Nationality:this.Nationality,
              AdhaarNo:this.AdhaarNo,
              PanNo:this.PanNo,
              Amount:this.amount,
              loanStaus:this.loanStaus='Pending',
              ApplicationId:this.ApplcationId='none',
              Remark:this.Remark='none'
            };
              this.service.addPersonalDetails(val).subscribe(res=>{
              this.alertMsg();
              this.resetForm();
            });
  }
}
