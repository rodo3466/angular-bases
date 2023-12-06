import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Bases-Angular15';
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
