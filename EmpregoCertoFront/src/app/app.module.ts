import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing } from './/app-routing.module';
import { CadastroVagaComponent } from './cadastro-vaga/cadastro-vaga.component';
import { LoginComponent } from './login/login.component';
import { ListaVagasComponent } from './lista-vagas/lista-vagas.component';
import { ListaCandidatosVagaComponent } from './lista-candidatos-vaga/lista-candidatos-vaga.component';
import { HomeComponent } from './home/home.component';
import {  OpcadComponent } from './op-cad/op-cad.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CandidatarVagaComponent } from './candidatar-vaga/candidatar-vaga.component';
import { ListaVagasCandidatoComponent } from './lista-vagas-candidato/lista-vagas-candidato.component';
import { CommonModule } from '@angular/common';
import { EmpresaService } from './services/empresa.service';
import { CandidatoService } from './services/candidato.service';
import { VagaService } from './services/vaga.service';
import { OpcadService } from './services/op-cad.service';
import { CandidatoVagaService } from './services/candidato-vaga.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CadastroEmpresaComponent,
    CadastroVagaComponent,
    LoginComponent,
    OpcadComponent,
    ListaVagasComponent,
    ListaCandidatosVagaComponent,
    HomeComponent,
    CadastroCandidatoComponent,
    CandidatarVagaComponent,
    ListaVagasCandidatoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // MaterializeModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    Routing
  ],
  providers: [EmpresaService, CandidatoService, VagaService, CandidatoVagaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
