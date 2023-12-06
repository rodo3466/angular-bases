import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <div>
    <h4>iss: {{counter}}</h4>
    <button (click)="decrementarPor()">-1</button>
    <button (click)="resetContador()">Reset</button>
    <button (click)="incrementarPor()">+1</button>
    </div>
  `
})
export class CounterComponent{
  public counter: number = 50;

  incrementarPor(): void{
    this.counter++;
  }

  decrementarPor():void{
    this.counter--;
  }

  resetContador():void{
    this.counter=50;
  }
}
