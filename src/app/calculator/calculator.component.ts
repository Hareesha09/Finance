import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  title = 'calculator';
  result: number;
  pricipal:number;
  rate:number=8.5;
  time:number;
  pricipal1:number;
  rate1:number;
  time1:number;

  result1:string[];
  final:string;

  /*********/

  pricipal_:number;
  result_:number;
  result_1:string[];
  final_1:string;

  constructor() { }

  ngOnInit(): void {
  }

  calEMI(): void{
    this.copydata();        
    this.rate = this.rate / (12 * 100); 
    this.time = this.time * 12; // one month period
    this.result = (this.pricipal * this.rate * Math.pow(1 + this.rate, this.time))
                   / (Math.pow(1 + this.rate, this.time) - 1);

    let str:string = '.';
    this.result1 = this.result.toString().split(str);
    this.final = '₹'+ this.result1[0] ;
    this.copydata2(); 
    

  }

  copydata() {
    this.pricipal1 = this.pricipal;
    this.rate1 = this.rate;
    this.time1 = this.time;
  }
  copydata2() {
    this.pricipal = this.pricipal1;
    this.rate = this.rate1;
    this.time = this.time1;
  }

  calEligibility(): void {
    this.result_ = 60*(0.6*this.pricipal_);
    let str:string = '.';
    this.result_1 = this.result_.toString().split(str);
    this.final_1 = '₹'+ this.result_1[0] ;
  }
  

  
 

}
