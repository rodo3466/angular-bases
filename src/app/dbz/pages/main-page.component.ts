import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private ServicioDbz: DbzService){

  }
  getPersonajes(): Personaje[]{
    return this.ServicioDbz.getPersonajes();
  }
  onDeletePersonaje(index: number): void{
    this.ServicioDbz.onDeletePersonaje(index);
  }
  onNewPersonaje(personaje: Personaje): void{
    this.ServicioDbz.onNewPersonaje(personaje);
  }
}
