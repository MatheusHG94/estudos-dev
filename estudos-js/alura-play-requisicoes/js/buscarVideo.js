import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo() {
    // evento.preventDefault(); // caso precise utilizar essa função tenho que passar o evento como parâmetro

    const dadosDaPesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(dadosDaPesquisa);

    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild) { // loop para remover todos os filhos e limpar o campo lista antes de adicionar os vídeos pesquisados
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => lista.appendChild(constroiCard(element.url, element.titulo, element.imagem, element.descricao)));

    if (busca.length == 0) {
        lista.innerHTML = '<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>';
    }
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

botaoDePesquisa.addEventListener('click', buscarVideo);
// botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));
