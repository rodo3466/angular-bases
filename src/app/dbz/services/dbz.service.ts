import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  personajes: Personaje[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  onNewPersonaje(personaje: Personaje): void{
    this.personajes.push(personaje);
  }
  onDeletePersonaje(index: number): void{
    this.personajes.splice(index, 1);
  }
  /***************/
  getPersonajes(): Personaje[]{
    return this.personajes;
  }
  onNuevoPersonaje(personaje: Personaje):void {
    personaje.id=uuid();
    this.personajes.push(personaje);
  }
  onBorrarPersonaje(id: string){
    this.personajes=this.personajes.filter(e => e.id!=id)
  }
}
