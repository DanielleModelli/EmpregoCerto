import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from '../services/empresa.service';
import { Empresa } from '../models/empresa';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  public razaoSocial: FormControl = new FormControl('', [Validators.required]);
  public nomeFantasia: FormControl = new FormControl('', [Validators.required]);
  public cnpj: FormControl = new FormControl('', [Validators.required]);
  public senha: FormControl = new FormControl('', [Validators.required]);
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public form = new FormGroup({
    razaoSocial: this.razaoSocial,
    nomeFantasia: this.nomeFantasia,
    cnpj: this.cnpj,
    senha: this.senha,
    email: this.email
  })

  constructor(private router:Router, private empresaService: EmpresaService) { }

  ngOnInit() {
  }

  salvar() {
    if (this.form.valid) {
      console.log(this.form.value);
      const empresa: Empresa = this.form.value;
      this.empresaService.post(empresa);
      this.router.navigate(['cadastro-vaga']);
    }
  }

  cancelar() {
    this.router.navigate(['home']);
  }
}
