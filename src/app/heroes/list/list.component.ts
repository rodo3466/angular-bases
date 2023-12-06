import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  nombreHeroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeRemovido?: string;
  removerHeroe(): void{
    this.heroeRemovido = this.nombreHeroes.pop();
  }




}
