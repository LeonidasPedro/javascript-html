const meuTitulo = document.querySelector('#titulo');
const btn = document.getElementById('botao');

btn.addEventListener('click', () => {
    let aluno = 0;
    let somaPesos = 0;
    let somaNotas = 0;
    let nota = 0;
    let peso = 0;
    let media = 0;
    while(confirm('Deseja lançar uma nota?')){
        nota = Number(prompt("informe a nota:"));
        peso = Number(prompt('Informe o peso:'));
        somaNotas += nota * peso;
        somaPesos += peso;      
    }
    if(somaPesos > 0){
        media = somaNotas / somaPesos;
        alert(`A média do aluno ${aluno} foi de ${media.toFixed(2)}`);
    } else {
        alert('Nenhuma nota informada');

    }
})
   

