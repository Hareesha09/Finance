import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/msg/message.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  msg : string='Login successfully...';
  constructor(private service:SharedService,private router : Router,
              private SpinnerService: NgxSpinnerService,
              private msgservice : MessageService) { }

  MailID:string;
  Password:string;
  AckMessage: string='';
  Result:string='';
  isLoginError : boolean = false;
  LoggedMailID:string;

  ngOnInit(): void {
  }

  getAlert(){
    alert(this.msg);
  }

  LoginUser(){
    this.AckMessage= "Login Entered";
    var CustomerObject = {
        UserId:0,
        Name:'',
        PhoneNo:'',
        Gender:'',
        Nationality:'', 
        AdhaarNo:' ', 
        PanNo:' ', 
        MailID:this.MailID.trim(),
        Password:this.Password.trim()
    };
    this.service.LoginUser(CustomerObject)
    .subscribe(res=> {
      this.LoggedMailID = (<any>res).MailID;
      this.msgservice.setOption('size',this.LoggedMailID);
      this.getAlert();
      this.router.navigate(['/dashboard']);
      this.SpinnerService.hide();  
    }, 
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
    
  }
}
