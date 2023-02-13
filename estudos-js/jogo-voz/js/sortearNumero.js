const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');
const elementoBox = document.querySelector('.box');

const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1); // é preciso do return para retornar o valor à const
}

elementoBox.innerHTML = numeroSecreto;
