import { Injectable } from '@angular/core';
import { CandidatoVaga } from '../models/candidatovaga';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Content-Type': 'application/json; charset=utf-8'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CandidatoVagaService {

  private baseUrl = 'http://localhost:50128/api/candidatovagas';

  constructor(
    private http: HttpClient) { }

  post(obj: CandidatoVaga) {
    return this.http.post(this.baseUrl, obj, httpOptions);
  }

  getByIdVaga(idVaga): any {
    return this.http.get(this.baseUrl + '/GetCandidatosVaga/' + idVaga, httpOptions);
  }

  getByIdCandidato(idCandidato): any {
    return this.http.get(this.baseUrl + '/GetVagasCandidato/' + idCandidato, httpOptions);
  }
}
