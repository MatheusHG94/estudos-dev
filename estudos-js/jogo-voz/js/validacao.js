function verificaValorDoChute(chute) {
    const numero = +chute; //converte para number

    if(seChuteInvalido(numero)) {
        if(chute == 'game over') {
            document.body.innerHTML = `
                <h2>Game Over</h2>

                <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `;
            document.body.style.backgroundColor = '#FF9494';
        } else {
            elementoChute.innerHTML += '<div>Valor inválido: não é um número.</div>';
            
            return;
        }
    }

    if (seForaDosLimitesPermitidos(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: deve estar entre ${menorValor} e ${maiorValor}.</div>`;

        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
    }
}

function seChuteInvalido(numero) { //verifica se é um número
    return Number.isNaN(numero);
}

function seForaDosLimitesPermitidos(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});
