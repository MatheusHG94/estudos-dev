const urlAPI = 'http://localhost:3000/videos';

async function listaVideos() {
    const conexao = await fetch(urlAPI); // quando não especifica parâmetro, o método é GET
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch(urlAPI, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ // objeto que será enviado para a API
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error('Não foi possível enviar o vídeo');
    }

    //const conexaoConvertida = await conexao.json();

    //return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`); // '?q=' na url indica que estamos buscando em 'videos' um elemento do array que contenha o termo em qualquer uma de suas propriedades
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaAPI = { 
    listaVideos,
    criaVideo,
    buscaVideo
}



// -------------------- MINHA TENTATIVA --------------------

/*

const urlAPI = 'http://localhost:3000/videos';
const containerVideos = document.querySelector('.videos__container');

function conectaAPI() {
    fetch(urlAPI)
    .then(resposta => resposta.json())
    .then(dados => mostraVideosNaTela(dados));
}

conectaAPI();

*/
