/* -------------------- Primeiros passos -------------------- */

function dizOla(nome) {
    console.log(`Olá ${nome}! Bem-vindo ao Robotron 2000!`);
}

dizOla('Pedro');

const robo = document.querySelector('.robo-js');

//robo.onclick = function () { // função anônima
//    console.log('Eu sou o Robotron 2000');
//};

//robo.addEventListener('click', function () { // chamando evento através do addEventListener('evento', função)
//    console.log('Eu sou o Robotron 2000');
//});

//robo.addEventListener('click', () => { // arrow function
//    console.log('Eu sou o Robotron 2000');
//});

robo.addEventListener('click', (evento) => { // o parâmetro 'evento' representa o event associado à função
    console.log(evento);
});

/* -------------------- Modificando contador de peças -------------------- */

const controleAjuste = document.querySelectorAll('[data-controle]'); // usando data-attribute para não depender das classes CSS
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controleAjuste.forEach ( (elemento) => { // método forEach para percorrer o array
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.parentNode, evento.target.dataset.controle); // passa o parentNode do evento para selecionar o controlar específico daquela peça; passa o dataset do data-controle para não depender do texto dentro do botão
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
    });
} );

function manipulaDados(controle, operacao) {
    const contador = controle.querySelector('[data-contador]'); // usando data-attribute para não depender das classes CSS
    
    if (operacao === '+') {
        contador.value = Number(contador.value) + 1;
    } else {
        if (Number(contador.value) > 0) {
            contador.value = Number(contador.value) - 1;
        } else {
            alert('Não há mais peças do tipo para retirar.');
        }
    }
}

/*
for (let i in controleAjuste) {
    if (i % 2 === 0) {
        const peca = controleAjuste[i].classList[1];
        controleAjuste[i].addEventListener('click', function () {
            manipulaDados(peca, 'subtrair');
        });
    } else {
        const peca = controleAjuste[i].classList[1];
        controleAjuste[i].addEventListener('click', function () {
            manipulaDados(peca, 'somar');
        });
    }
}
*/

/* -------------------- Modificando quadro de estatísticas -------------------- */

function atualizaEstatisticas (peca, operador) {
    if (operador === '+') {
        estatisticas.forEach( (elemento) => {
            elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        } );
    } else {
        estatisticas.forEach( (elemento) => {
            elemento.textContent = Number(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        } );
    }
}

/* -------------------- Modificando cor do Robotron -------------------- */

const botoes = document.querySelectorAll('[data-botao]');

botoes.forEach( (elemento) => {
    elemento.addEventListener('click', () => {
        const cor = elemento.attributes[2].textContent;
        /*switch (cor) {
            case 'Azul':
                robo.src = "img/Robotron 2000 - Azul.png";
                break
            case 'Vermelho':
                robo.src = "img/Robotron 2000 - Vermelho.png";
                break
            case 'Amarelo':
                robo.src = "img/Robotron 2000 - Amarelo.png";
                break
            case 'Rosa':
                robo.src = "img/Robotron 2000 - Rosa.png";
                break
            case 'Preto':
                robo.src = "img/Robotron 2000 - Preto.png";
                break
            case 'Branco':
                robo.src = "img/Robotron 2000 - Branco.png";
                break
        }*/
        robo.src = `img/Robotron 2000 - ${cor}.png`;
    });
});

