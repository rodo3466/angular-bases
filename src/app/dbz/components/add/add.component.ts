import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{
  @Output()
  onNewPersonaje : EventEmitter<Personaje> = new EventEmitter();
  personaje: Personaje = {
    name : '',
    power: 0
  };

  emitirPersonaje(): void{
    if(this.personaje.name.length==0) return;

    this.onNewPersonaje.emit(this.personaje);
    this.personaje = {name: '',  power: 0};
  }
}
