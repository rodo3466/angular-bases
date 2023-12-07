import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes: Personaje[] = [{
      name: 'Krillin',
      power: 1000
    },{
      name: 'Goku',
      power: 9500
    },{
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewPersonaje(personaje: Personaje): void{
    this.personajes.push(personaje);
  }
  onDeletePersonaje(id: number): void{
    debugger;
    this.personajes.splice(id, 1);
  }
}
