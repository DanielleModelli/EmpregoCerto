import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-vaga',
  templateUrl: './cadastro-vaga.component.html',
  styleUrls: ['./cadastro-vaga.component.css']
})
export class CadastroVagaComponent implements OnInit {
  public nome: FormControl = new FormControl('', [Validators.required]);
  public descricao: FormControl = new FormControl('', [Validators.required]);
  public salario: FormControl = new FormControl('', [Validators.required]);
  public form = new FormGroup({
    nome: this.nome,
    descricao: this.descricao,
    salario: this.salario
  });
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  salvar() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate(['/lista-vagas']);
    }
  }

  cancelar() {
    this.router.navigate(['/lista-vagas']);
  }
}
