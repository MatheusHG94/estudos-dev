import { conectaAPI } from "./conectaAPI.js"; // importando a variável que exportamos no conectaAPI.js

const lista = document.querySelector('[data-lista]');

function constroiCard(url, titulo, imagem, descricao) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;

    return video;
}

async function listaVideos() {
    const listaApi = await conectaAPI.listaVideos();
    listaApi.forEach(element => lista.appendChild(constroiCard(element.url, element.titulo, element.imagem, element.descricao)));
}

listaVideos();



// -------------------- MINHA TENTATIVA --------------------

/* 

function mostraVideosNaTela(listaVideos) {
    containerVideos.innerHTML = '';
    listaVideos.forEach(video => {
        containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe width="100%" height="72%" src="${video.url}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <div class="descricao-video">
                    <img src="./img/logo.png" alt="logo canal alura">
                    <h3>${video.titulo}</h3>
                    <p>${video.descricao}</p>
                </div>
            </li>
        `;
    });
} 

*/
