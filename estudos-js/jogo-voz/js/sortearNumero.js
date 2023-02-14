const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1); // é preciso do return para retornar o valor à const
}
