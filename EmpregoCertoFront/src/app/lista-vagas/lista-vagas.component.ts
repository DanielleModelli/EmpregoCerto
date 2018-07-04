import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VagaService } from '../services/vaga.service';
import { CandidatoVagaService } from '../services/candidato-vaga.service';
import { CandidatoService } from '../services/candidato.service';
import { Candidato } from '../models/candidato';
import { CandidatoVaga } from '../models/candidatoVaga';
import { Vaga } from '../models/vaga';

@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css']
})
export class ListaVagasComponent implements OnInit {
  public vagas = [];

  constructor(
    private router:Router, 
    private service: VagaService,
    private candidatoService: CandidatoService,
    private candidatoVagaService: CandidatoVagaService) { }

  ngOnInit() {
    this.buscarVagas();
  }

  buscarVagas() {
    this.service.get().subscribe(response => {
      console.log(response);
      this.vagas = response;
    });
  }

  candidatar(vaga: Vaga) {
    const candidato = new Candidato();
    const candidatoVaga = new CandidatoVaga(vaga, candidato);
    this.candidatoVagaService.post(candidatoVaga).subscribe(response => {
      alert('Você foi inscrito na vaga!');
    });
  }
  
  cadastrar() {
    this.router.navigate(['/cadastro-vaga']);
  }
  
  home() {
    this.router.navigate(['']);
  }
}
