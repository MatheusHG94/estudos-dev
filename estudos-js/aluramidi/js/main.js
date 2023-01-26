function tocaSom(idAudio) {

    let som = document.querySelector(idAudio);

    som.play();

    /*----------------------------------------------------------
    var tecla = document.querySelector('.tecla_clap').classList[1];

    let som = document.querySelector(`#som_${tecla}`);

    som.play();
    ---------------------------------------------------------*/
}

const listaTeclas = document.querySelectorAll('.tecla');

/*for (let i in listaTeclas) {
    listaTeclas[i].onclick = function () { //função anônima
        tocaSom('')
    };
}*/

let i = 0;
while (i <= listaTeclas.length) {
    listaTeclas[i].onclick = function () { //função anônima
        tocaSom('')
    };
    i++;
}

/* --------------------------------------------------------
var tecla = document.querySelector('.tecla[]').classList[1];

function tocaSomPom() {
    let pom_som = document.querySelector('#som_tecla_pom');

    pom_som.play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap() {
    let som_clap = document.querySelector('#som_tecla_clap');

    som_clap.play()
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

var x = document.querySelector('.tecla_pom').classList[1];

alert(x);
*/