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

/* -------------------- Modificando peças -------------------- */

const controleAjuste = document.querySelectorAll('.controle-ajuste');

function manipulaDados(peca, operacao) {
    const classePeca = `.contador-${peca}`;
    const contador = document.querySelector(classePeca)

    if (operacao === 'somar') {
        contador.value = Number(contador.value) + 1;
    } else {
        if (Number(contador.value) > 0) {
            contador.value = Number(contador.value) - 1;
        } else {
            alert('Não há mais peças do tipo para retirar.');
        }
    }
}

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



