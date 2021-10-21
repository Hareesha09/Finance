import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service:SharedService,private router : Router,private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  msg : string='Login successfully';
 
  @Input()
  MailID:string;
  Password:string;
  AckMessage: string='';
  Result:string='';
  isLoginError : boolean = false;

  getAlert(){
    alert(this.msg);
  }

  LoginAdmin(){
    this.AckMessage= "Login Entered";
    var CustomerObject = {
        UserId:0,
        MailID:this.MailID,
        Password:this.Password
    };
    this.service.LoginAdmin(CustomerObject)
    .subscribe(res=> {

      const LoggedUserEmail = (<any>res).Email;
      sessionStorage.setItem('UserEmail',LoggedUserEmail);
      alert('Login Sucess....');
      this.router.navigate(['/admin-dash']);
    }, 
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
    
  }

}
