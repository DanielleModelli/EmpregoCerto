import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OpcadService {

  private URLgetAll = 'http://localhost:8080/api/lista-candidatos-vaga';

  constructor(
    private http: HttpClient) { }

  getAll() {
    this.http.get(this.URLgetAll).subscribe(data => {
      return data;
    });
  }

}
