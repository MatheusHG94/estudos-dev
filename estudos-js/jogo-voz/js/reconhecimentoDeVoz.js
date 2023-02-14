const elementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValorDoChute(chute);
}

function exibeChuteNaTela(chute) {
    /*const novaDiv = document.createElement('div');
    novaDiv.innerHTML = 'Você disse:';
    elementoChute.appendChild(novaDiv);

    const novaBox = document.createElement('span');
    novaBox.classList.add('box');
    novaBox.innerHTML = chute;
    elementoChute.appendChild(novaBox);*/

    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span> 
    `;
}
