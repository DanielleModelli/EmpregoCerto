import { Component, OnInit } from '@angular/core';
import { CandidatoVagaService } from '../services/candidato-vaga.service';
import { CandidatoVaga } from '../models/candidatoVaga';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lista-candidatos-vaga',
  templateUrl: './lista-candidatos-vaga.component.html',
  styleUrls: ['./lista-candidatos-vaga.component.css']
})
export class ListaCandidatosVagaComponent implements OnInit {
  public candidatosVaga = [];
  // candidatoVaga = new CandidatoVaga;
  candidatos = [];
  constructor(
    private _candidatoVaga : CandidatoVagaService ) { }

  ngOnInit() {
    this.buscarCandidatosVaga();
  }

  // buscarCandidatosVaga(): Observable<string> {
  //   this._candidatoVaga.getAll()
  //    .map((result: Response) => result.json())
  //      .map((data: any) => {
  //        let location: string = '';
  //        if(data) {
  //          console.log(data.description);
  //          this.location = data.description; // <== 
  //        }
  //        return this.location;
  //       });
  //   }

    buscarCandidatosVaga(){
      // this._candidatoVaga.getByIdCandidato();
      }
    }

    // this._freteService.getFrete(this.cep)
    //         .subscribe((data: Frete) => this.frete = data,
    //         error => console.log(error));
    // }

