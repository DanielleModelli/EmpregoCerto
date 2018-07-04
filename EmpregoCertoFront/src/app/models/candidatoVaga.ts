import { Vaga } from "./vaga";
import { Candidato } from "./candidato";

export class CandidatoVaga {
    constructor(vaga: Vaga, candidato: Candidato) {
        this.idVaga = vaga.id;
        this.nomeVaga = vaga.nome;
        this.idCandidato = candidato.id;
        this.nomeCandidato = candidato.nome;
        this.dataInscricao = new Date().toISOString();
    }

    id: number;
    idVaga: number;
    idCandidato: number;
    dataInscricao: string;
    nomeVaga: string;
    nomeCandidato: string;
}