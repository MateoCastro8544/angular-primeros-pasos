import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'IronMan';
  public age: number = 45;

  get nameUpperCase(): string {
    return this.name.toUpperCase();
  }

  greet(): string {
    return `Hi my name is ${this.name} and I am ${this.age} years old. `;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }
  changeName(): void {
    this.age = 80;
  }

  resetForm(): void {
    this.name = 'IronMan';
    this.age = 45;
  }
}
