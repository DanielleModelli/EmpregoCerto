using System;
using System.Collections.Generic;

namespace EmpregoCertoAPI.Models
{
    public partial class Vaga
    {
        public Vaga()
        {
            CandidatoVaga = new HashSet<CandidatoVaga>();
        }

        public int Id { get; set; }
        public int IdEmpresa { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double Salario { get; set; }
        
        public ICollection<CandidatoVaga> CandidatoVaga { get; set; }
    }
}
