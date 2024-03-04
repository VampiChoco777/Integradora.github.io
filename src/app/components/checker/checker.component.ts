import { Component } from '@angular/core';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrl: './checker.component.scss'
})
export class CheckerComponent {
  passive: number = 0;
  active: number = 0;
  capital: number = 0;
  /*active: number | null = 0;*/

  activeValues: number[] = [];
  passiveValues: number[] = [];
  capitalValues: number[] = [];

  constructor() { }


  addPassive(): void {
    this.passiveValues.push(Number(this.passive)); // Convierte el valor a número
    this.passive = 0;
  }

  addActive(): void {
    this.activeValues.push(Number(this.active)); // Convierte el valor a número
    this.active = 0;
  }

  addCapital(): void {
    this.capitalValues.push(Number(this.capital)); // Convierte el valor a número
    this.capital = 0;
  }

  isBalanceCorrect(): boolean {
    return this.checkBalance();
  }

  private checkBalance(): boolean {
    const totalActive = this.activeValues.reduce((a, b) => a + b, 0);
    const totalPassive = this.passiveValues.reduce((a, b) => a + b, 0);
    const totalCapital = this.capitalValues.reduce((a, b) => a + b, 0);
    return totalActive + totalPassive === totalCapital;
  }
}
