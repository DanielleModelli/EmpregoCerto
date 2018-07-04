import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Candidato } from '../models/candidato';
import { Router } from '@angular/router';
import { CandidatoService } from '../services/candidato.service';


@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.css']
})
export class CadastroCandidatoComponent implements OnInit {
  candidato: Candidato = new Candidato();
  public nome: FormControl = new FormControl('', [Validators.required]);
  public endereco: FormControl = new FormControl('', [Validators.required]);
  public data_nascimento: FormControl = new FormControl('', [Validators.required]);
  public telefone: FormControl = new FormControl('', [Validators.required]);
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public cpf: FormControl = new FormControl('', [Validators.required]);

 public senha: FormControl = new FormControl('', [Validators.required]);
  form: FormGroup;
  
  constructor(private router:Router, private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: this.nome,
      endereco: this.endereco,
      data_nascimento: this.data_nascimento,
      telefone: this.telefone,
      email: this.email,
      cpf: this.cpf,
      senha: this.senha
    });
  }
  
  salvar() {
    this.candidatoService.post(this.form.value);
      this.router.navigate(['lista-vagas']);
    
  }

  cancelar() {
    this.router.navigate(['home']);
  }

}
