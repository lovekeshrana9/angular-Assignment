import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css','./calculator.mediaqueries.css']
})
export class CalculatorComponent implements OnInit {
  
  minRange: number = 1000000;
  maxRange: number = 3000000;
  selectedIncome: number = 100000;  
  
  monthlyExpense: number = 50000;
  monthlyExpenseMinRange: number = 0;
  monthlyExpenseMaxRange: number = 100000;

  existingLoan: boolean = false;
  
  emiExistingLoan: number; 

  options: Options = {
      floor: this.minRange,
      ceil: this.maxRange
  }

  monthlyExpenseOptions: Options = {
      floor: this.monthlyExpenseMinRange,
      ceil: this.monthlyExpenseMaxRange
  }

  constructor() { }

  ngOnInit() {
  }

  toggleExistingLoanButton(toggle){
      this.existingLoan = toggle;
  }

}
