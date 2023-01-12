import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-diretivas-atributos>
      <h1>Aulas de Diretivas Atributo</h1>
      <h3>Final da aula</h3>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
