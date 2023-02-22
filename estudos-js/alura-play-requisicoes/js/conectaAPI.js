const url = 'http://localhost:3000/videos';

async function listaVideos() {
    const conexao = await fetch(url);
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

export const conectaAPI = { 
    listaVideos
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
