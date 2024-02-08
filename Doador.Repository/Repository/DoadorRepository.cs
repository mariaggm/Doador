using Dapper;
using Doador.Domain.Commands;
using Doador.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doador.Repository.Repository
{
    public class DoadorRepository : IDoadorRepository
    {
        string conexao = @"Server=(localdb)\mssqllocaldb;Database=Cadastrodoador;Trusted_Connection=True;MultipleActiveResultSets=true";
        public async Task<string> PostAsync(DoadorCommand command)
        {
            string queryInsert = @"
            INSERT INTO Doador(DoadorNome, Cidade, estado, Cep, Email, Telefone)
            VALUES(@DoadorNome, @Cidade, @Estado, @Cep, @Email, @Telefone)";
            using (SqlConnection conn = new SqlConnection(conexao)) 
            {
                conn.Execute(queryInsert, new
                {
                    DoadorNome = command.DoadorNome,
                    Cidade = command.Cidade,
                    DoadorId = command.DoadorId,
                    Estado = command.estado,
                    Cep = command.Cep,
                    Email = command.Email,
                    Telefone = command.Telefone,
                });

                return "Doador Cadastrado com sucesso";
            }
        }
        public void PostAsync() 
        {
            throw new NotImplementedException();
        }

    }

    
}
