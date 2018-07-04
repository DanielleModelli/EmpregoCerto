using System;
using System.Collections.Generic;

namespace EmpregoCertoAPI.Models
{
    public partial class Empresa
    {
        public Empresa()
        {
            //Vaga = new HashSet<Vaga>();
        }

        public int Id { get; set; }
        public string RazaoSocial { get; set; }
        public string NomeFantasia { get; set; }
        public string Cnpj { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        //public ICollection<Vaga> Vaga { get; set; }
    }
}
