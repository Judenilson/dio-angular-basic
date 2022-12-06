import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  constructor() {
    this.produtos = ['mouse', 'teclado', 'fonte', 'cabo'];
  }

  ngOnInit(): void {}

  adicionar(){
  this.produtos.push("Judenilson");
  }
  remover(){
    this.produtos.pop();
  }
  removerItem(index:number){
    this.produtos.splice(index, 1);
  }

  menuType:string = "diretor";
}
