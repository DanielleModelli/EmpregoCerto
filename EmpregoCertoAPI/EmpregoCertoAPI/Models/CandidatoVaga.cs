using System;
using System.Collections.Generic;

namespace EmpregoCertoAPI.Models
{
    public partial class CandidatoVaga
    {
        public int Id { get; set; }
        public int IdVaga { get; set; }
        public int IdCandidato { get; set; }
        public DateTime DataInscricao { get; set; }
        public string NomeVaga { get; set; }
        public string NomeCandidato { get; set; }

        public Vaga IdVagaNavigation { get; set; }
    }
}
