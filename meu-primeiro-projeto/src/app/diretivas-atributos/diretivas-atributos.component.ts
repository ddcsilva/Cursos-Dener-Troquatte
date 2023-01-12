import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public altura: string = '20px';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.altura == '20px') {
        this.altura = '40px';
      } else {
        this.altura = '20px';
      }
    }, 2000);
  }
}
