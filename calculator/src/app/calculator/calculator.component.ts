import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title="calculator"
result="";
  constructor() { }

  ngOnInit() {
  }
  add(data)
    {
        this.result+=data;
     }
     showResult(){

      this.result=eval(this.result);
     }

}
