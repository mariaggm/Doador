document.addEventListener('DOMContentLoaded', function(){
    
    const DoadorLista = document.getElementById('Doador-lista');

    function renderTable(data){
        pessoaLista.innerHTML ='';

        data.forEach(Doador => {
            const row = document.createElement('tr');

            row.innerHTML = `
                 <td>${Doador.DoadorId}</td>
                 <td>${Doador.DoadorNome}</td>
                 <td>${Doador.Cidade}</td>
                 <td>${Doador.estado}</td>
                 <td>${Doador.Email}</td>
                 <td>${Doador.Telefone}</td>
                 <td>${Doador.Cep}</td>
                 
                 
                 <td>
                     <button>Editar</button>
                     <button >Excluir</button>
                </td>    

            `;
            DoadorLista.appendChild(row);
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

function AbrirTelaCreate(){
    window.location.href = 'pages/create.html';
}
function createProduto(){
    window.location.href = 'pages/produtocreate.html';
}