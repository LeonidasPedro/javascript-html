const formulario = document.getElementById('formulario');
const pessoasCadastradas = document.getElementById('clientesCadastrados')

console.log(formulario)

let pessoasBancoDeDados = JSON.parse(localStorage.getItem('pessoas')) || [];
pessoasBancoDeDados.forEach(cliente => {
    cliente = JSON.parse(cliente);
    adicionaLinhaCadastro(cliente);
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log(evento);

    let cadastro = $('#formulario').serializeArray();
    let pessoa = arrayToObject(cadastro);
    console.log(pessoa);
    adicionaLinhaCadastro(pessoa);
    
    let pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    pessoas.push(JSON.stringify(pessoa));//adiciona o submit no array - transforma em string pq o localstorage precisa
    localStorage.setItem('pessoas', JSON.stringify(pessoas))
   
})


//o parametro "array" deve ser gerado a partir da função .serializeArray() 
//do jQuerry para funcionar corretamente

function arrayToObject(array) {
    let object = {};
    array.forEach(campo => {
        object[campo.name] = campo.value;
    });
    return object;
}
function adicionaLinhaCadastro(pessoa){
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <tr>
            <td>${pessoa.Nome}</td>
            <td>${pessoa.Email}</td>
            <td>${pessoa.endereco}</td>
            <td>${pessoa.Cidade}</td>
            <td>${pessoa.CEP}</td>
        </tr>
    `;
    pessoasCadastradas.appendChild(tr);
}