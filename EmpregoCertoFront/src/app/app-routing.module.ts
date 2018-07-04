// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
// import { AppComponent } from './app.component';

// const routes: Routes = [
//   { path: '', component: AppComponent },
//   { path: 'cadastro-empresa', component: CadastroEmpresaComponent }
// ];

// @NgModule({
//   exports: [RouterModule],
//   imports: [RouterModule.forRoot(routes)]
// })

// export class AppRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { HomeComponent } from './home/home.component';
import { CadastroVagaComponent } from './cadastro-vaga/cadastro-vaga.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { ListaVagasComponent } from './lista-vagas/lista-vagas.component';
import { ListaVagasCandidatoComponent } from './lista-vagas-candidato/lista-vagas-candidato.component';
import { ListaCandidatosVagaComponent } from './lista-candidatos-vaga/lista-candidatos-vaga.component';
import { LoginComponent } from './login/login.component';
import { OpcadComponent } from './op-cad/op-cad.component';
 
export const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'op-cad', component: OpcadComponent },
    { path: 'op-cad', component: OpcadComponent },
    { path: 'cadastro-empresa', component: CadastroEmpresaComponent },
    { path: 'cadastro-vaga', component: CadastroVagaComponent },
    { path: 'cadastro-candidato', component: CadastroCandidatoComponent },
    { path: 'lista-vagas', component: ListaVagasComponent },
    { path: 'lista-vagas-candidato', component: ListaVagasCandidatoComponent },
    { path: 'lista-candidatos-vaga', component: ListaCandidatosVagaComponent }
];
 
export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
