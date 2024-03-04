import { Component } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {

  passive: number[] = [];
  active: number [] = [];
  capital: number [] = [];

  // AGREGAR VALORES AL PASIVO, ACTIVO Y CAPITAL
  addPassive(value: number) {
    this.passive.push(value);
  }

  addActive(value: number) {
    this.active.push(value);
  }

  addCapital(value: number) {
    this.capital.push(value);
  }

  // SUMAR VALORES AL PASIVO, ACTIVO Y CAPITAL

  sumPassive() {
    return this.passive.reduce((a, b) => a + b, 0);
  }

  sumActive() {
    return this.active.reduce((a, b) => a + b, 0);
  }

  sumCapital() {
    return this.capital.reduce((a, b) => a + b, 0);
  }

  // VERIFICAR QUE EL BALANCE SEA CORRECTO

  checkBalance(): boolean {
    return this.sumPassive() === (this.sumActive() + this.sumCapital());
  }
  
  constructor() {}

}
