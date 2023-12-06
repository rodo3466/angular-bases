import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string = 'ironman';
  public edad: number = 45;

  get capitalizarNombre(): string{
    return this.nombre.toUpperCase();
  }

  getHeroDescripcion(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(nuevoNombre: string = 'tamy'): void{
    this.nombre=nuevoNombre;
  }

  cambiarEdad(nuevaEdad: number = 32): void{
    this.edad = nuevaEdad;
  }

  resetForm(): void{
    this.nombre='ironman';
    this.edad=45;
  }

}
