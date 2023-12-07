import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{
  constructor(private ServicioDbz: DbzService){

  }
  @Output()
  onNewPersonaje : EventEmitter<Personaje> = new EventEmitter();
  personaje: Personaje = {
    id:'',
    name : '',
    power: 0
  };

  emitirPersonaje(): void{
    if(this.personaje.name.length==0) return;

    this.onNewPersonaje.emit(this.personaje);
    this.personaje = {id:'', name: '',  power: 0};
  }
  addPersonaje():void{
    this.ServicioDbz.onNuevoPersonaje(this.personaje);
    this.personaje = {id:'', name: '',  power: 0};
  }
}
