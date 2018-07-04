import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-vagas-candidato',
  templateUrl: './lista-vagas-candidato.component.html',
  styleUrls: ['./lista-vagas-candidato.component.css']
})
export class ListaVagasCandidatoComponent implements OnInit {
  public vagasCandidato = [];

  constructor() { }

  ngOnInit() {
    this.buscarVagasCandidato();
  }

  buscarVagasCandidato(){
    this.vagasCandidato = [
      { nome: 'teste 1', descricao: 'teste 1', salario: 2500 },
      { nome: 'teste 2', descricao: 'teste 2', salario: 3000 },
      { nome: 'teste 3', descricao: 'teste 3', salario: 3500 }
    ];
  }
}