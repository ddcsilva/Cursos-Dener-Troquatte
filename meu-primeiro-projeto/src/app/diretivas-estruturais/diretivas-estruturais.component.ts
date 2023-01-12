import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public listaNomes: Array<{ nome: string; idade: number }> = [
    { nome: 'Danilo Silva', idade: 33 },
    { nome: 'Rosana Silva', idade: 36 },
    { nome: 'Raquel Silva', idade: 8 },
  ];

  public nome: string = 'Rosana';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.listaNomes.push({ nome: 'José', idade: 30 });
  }

  public onClickEventList(event: number) {
    this.listaNomes.splice(event, 1);
  }
}
