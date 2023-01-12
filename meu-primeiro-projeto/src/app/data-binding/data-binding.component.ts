import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public nome: string = 'Danilo';
  public idade: number = 33;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string =
    'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  public imgTitle: string = 'Imagem de Teste';

  public position: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
