function verificaValorDoChute(chute) {
    const numero = +chute; //converte para number

    if(seChuteInvalido(numero)) { //verifica se é um número
        elementoChute.innerHTML += '<div>Valor inválido: não é um número.</div>';
    }

    if (seForaDosLimitesPermitidos(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: deve estar entre ${menorValor} e ${maiorValor}.</div>`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `;
    }
}

function seChuteInvalido(numero) {
    return Number.isNaN(numero);
}

function seForaDosLimitesPermitidos(numero) {
    return numero > maiorValor || numero < menorValor;
}
