import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  listaPersonajes: Personaje[] = [{
    name: 'PorDefecto',
    power: 10
  }]

  @Output()
  onDeletePersonaje : EventEmitter<number> = new EventEmitter();

  emitirDeletePersonaje(id: number): void{
    this.onDeletePersonaje.emit(id);
  }
}
