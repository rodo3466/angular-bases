import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private ServicioDbz: DbzService){

  }
  @Input()
  listaPersonajes: Personaje[] = [{
    id: '0',
    name: 'PorDefecto',
    power: 10
  }]

  @Output()
  onDeletePersonaje : EventEmitter<number> = new EventEmitter();

  emitirDeletePersonaje(id: number): void{
    this.onDeletePersonaje.emit(id);
  }
  getPersonajes(): Personaje[]{
    return this.ServicioDbz.getPersonajes();
  }
  borrarPersonaje(id: string):void{
    this.ServicioDbz.onBorrarPersonaje(id);
  }
}
