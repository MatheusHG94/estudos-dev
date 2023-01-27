function tocaSom(seletorAudio) {
    let som = document.querySelector(seletorAudio);

    if (som && som.localName === 'audio') { //colocando apenas o nome do elemento 'som' o JS já entende que é para varificar se é diferente de nulo
        som.play();
    } else {
        console.log('Elemento não encontrado ou inválido')
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let i in listaTeclas) {
    const tecla = listaTeclas[i];
    const teclaPressionada = tecla.classList[1];
    const idAudio = `#som_${teclaPressionada}`; //template string

    tecla.onclick = function () { //função anônima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //evento, event ou e são nomes convencionalmente dados ao parâmetro que contém as especificidades do evento ao qual a função está associada
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

/*let i = 0;
while (i < listaTeclas.length) {
    const tecla = listaTeclas[i];
    const teclaPressionada = tecla.classList[1];
    const idAudio = `#som_${teclaPressionada}`; //template string

    tecla.onclick = function () { //função anônima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //evento, event ou e são nomes convencionalmente dados ao parâmetro que contém as especificidades do evento ao qual a função está associada
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    i++;
}*/
