import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <span> {{ number }} </span>
    <br />
    <button (click)="acumular(base)">{{ base }}</button>
    <button (click)="acumular(-base)">{{ -base }}</button>
  `,
})
export class CounterComponent {
  title: string = 'Contador App';
  number: number = 0;
  base: number = 5;

  acumular(valor: number) {
    this.number += valor;
  }
}
