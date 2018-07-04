using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EmpregoCertoAPI.Models
{
    public partial class EmpregoCertoDBContext : DbContext
    {
        public virtual DbSet<CandidatoVaga> CandidatoVaga { get; set; }
        public virtual DbSet<Empresa> Empresa { get; set; }
        public virtual DbSet<Vaga> Vaga { get; set; }

        public EmpregoCertoDBContext(DbContextOptions<EmpregoCertoDBContext> options)
    : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Server=DESKTOP-788CHIO;Database=EmpregoCertoDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CandidatoVaga>(entity =>
            {
                entity.Property(e => e.DataInscricao).HasColumnType("date");

                entity.Property(e => e.NomeCandidato)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.NomeVaga)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.CandidatoVaga)
                    .HasForeignKey(d => d.IdVaga)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Candidato__IdVag__3C69FB99");
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasColumnName("CNPJ")
                    .HasMaxLength(21)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.NomeFantasia)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.RazaoSocial)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Vaga>(entity =>
            {
                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(5000)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Salario).HasColumnType("decimal(4, 2)");

                //entity.HasOne(d => d.IdEmpresaNavigation)
                //    .WithMany(p => p.Vaga)
                //    .HasForeignKey(d => d.IdEmpresa)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK__Vaga__IdEmpresa__398D8EEE");
            });
        }
    }
}
