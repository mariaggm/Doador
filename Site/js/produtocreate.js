function createProduto(){

    const NomeProduto= document.getElementById('NomeProduto').value;
    const Descricao= document.getElementById('Descricao').value;
    const Categoria= document.getElementById('Categoria').value;
    const DisponibilidadeAdocao= document.getElementById('DisponibilidadeAdocao').value;
    const DoadorId= document.getElementById('DoadorId').value;
   

const data={
    produtoId : 0,
    nomeProduto: NomeProduto,
    descricao: Descricao,
    categoria: Categoria,
    disponibilidadeAdocao: DisponibilidadeAdocao,
    doadorId: DoadorId,
    
}
console.log(data)


fetch('https://localhost:7024/api/Produto' , {
method:'post',
headers:{
    'Content-Type': 'application/json'
},
body: JSON.stringify(data) 


}).then(Response=> {
    console.log(Response)
    if(!Response.ok){
        alert('Erro ao criar Produto');
    }
    alert("Produto criado com sucesso!");
    window.location.href='../index.html';
})
}