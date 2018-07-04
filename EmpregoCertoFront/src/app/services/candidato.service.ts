import { Injectable } from '@angular/core';
import { Candidato } from '../models/candidato';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',
    'Content-Type': 'application/json; charset=utf-8'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  //COLOCAR A CHAMADA DA API AQUI
  private baseUrl = '';

  constructor(
    private http: HttpClient) { }

  get(): any {
    return this.http.get(this.baseUrl, httpOptions);
  }

  getById(id): any {
    return this.http.get(this.baseUrl + '/' + id, httpOptions);
  }

  post(obj: Candidato) {
    return this.http.post(this.baseUrl, obj, httpOptions);
  }

  put(obj: Candidato) {
    return this.http.put(this.baseUrl, obj, httpOptions);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
