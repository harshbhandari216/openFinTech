import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  monthlyIncome = 150000;
  monthlyExpense = 50000;
  tenure = 6;
  existingLoanEMI = 15000;
  timePeriod = [
    { value: 1, viewValue: '1 months' },
    { value: 2, viewValue: '2 months' },
    { value: 3, viewValue: '3 months' },
    { value: 6, viewValue: '6 months' },
  ];


  constructor() {
  }


  ngOnInit(): void {
  }

  public formatLabel(value: number) {
    return Math.round(value / 1000) + 'K';
  }

}
