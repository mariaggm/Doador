document.addEventListener('DOMContentLoaded', function(){
    
    const ProdutoLista = document.getElementById('produto-lista');

    function renderTable(data){
        produtoLista.innerHTML ='';

        data.forEach(Produto => {
            const row = document.createElement('tr');

            row.innerHTML = `
                 <td>${Produto.ProdutoId}</td>
                 <td>${Produto.NomeProduto}</td>
                 <td>${Produto.Descricao}</td>
                 <td>${Produto.Categoria}</td>
                 <td>${Produto.DisponibilidadeAdocao}</td>
                 <td>${Produto.DoadorId}</td>
                 
                 
                 
                 <td>
                     <button>Editar</button>
                     <button >Excluir</button>
                </td>    

            `;
            ProdutoLista.appendChild(row);
        })
            
        
    }
    function feachDoador(){
        // fetch('https://localhost:7024/api/Doador/CadastrarDoador')
        // .then(response => response.json())
        // console.log(data)
        // .then(data => renderTable(data))
        // .catch(error => console.error('Erro ao buscar dados da Api'))

    }
    feachDoador();

})

