import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    evento.preventDefault(); // previne a ação padrão do submit, de recarregar a página

    const titulo = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const descricao = Math.floor(Math.random() * 10).toString(); // a função Math.random() cria um número pseudoaleatório entre 0 e 1; a função Math.floor() vai arredondar o valor passado para o menor inteiro

    await conectaAPI.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener('submit', evento => criarVideo(evento));
