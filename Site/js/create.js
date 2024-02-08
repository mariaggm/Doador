function createDoador(){

    const DoadorNome= document.getElementById('DoadorNome').value;
    const Cidade= document.getElementById('Cidade').value;
    const estado= document.getElementById('estado').value;
    const Cep= document.getElementById('Cep').value;
    const Email= document.getElementById('Email').value;
    const Telefone= document.getElementById('Telefone').value;


const data={
    DoadorNome:DoadorNome,
    Cidade:Cidade,
    estado:estado,
    Cep:Cep,
    Email:Email,
    Telefone:Telefone
}
console.log(data)

fetch('https://localhost:7024/api/Doador/CadastrarDoador' , {
method:'POST',
headers:{
    'Content-Type':'application/json'
},
body: JSON.stringify(data)


}).then(Response=> {
    if(!Response.ok){
        alert('Erro ao criar Doador');
    }
    alert("Doador criada com sucesso!");
    window.location.href='../index.html';
})
}