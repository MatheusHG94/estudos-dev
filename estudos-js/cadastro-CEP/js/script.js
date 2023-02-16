/*
var consulta = fetch('https://viacep.com.br/ws/83601724/json/')
.then(resposta => resposta.json())
.then(r => {
    if (r.erro) {
        throw Error('Esse CEP não existe!')
    } else {
        console.log(r)
    }
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluído!'));

console.log(consulta);
*/

/*
    FETCH faz a requisição que, quando chamada, iniciará uma promise e rodará em segundo plano até ser concluída;

    THEN manipula o retorno da requisição;

    o método .json() é necessário para transformar o retorno, que chega em bytes, em um objeto js;

    a condicional dentro do segundo then vai capturar os CEPs de formato válido, mas inexistentes, e jogará (THROW) o erro para o catch;

    CATCH serve para capturar os erros;

    FINALLY ocorre ao final do processo.
*/

const inputCEP = document.querySelector('#cep');

inputCEP.addEventListener('focusout', () => {
    const cep = inputCEP.value;
    const endereco = buscaEndereco(cep);
})

async function buscaEndereco(cep) {
    const mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = '';
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('Esse CEP não existe!');
        }
        console.log(consultaCEPConvertida);
        preencheEndereco(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
        mensagemErro.innerHTML = '<p>CEP inválido. Tente novamente!</p>';
    }
}

function preencheEndereco(endereco) {
    const inputEndereco = document.querySelector('#endereco');
    const inputBairro = document.querySelector('#bairro');
    const inputCidade = document.querySelector('#cidade');
    const inputUF = document.querySelector('#estado');

    inputEndereco.value = endereco.logradouro;
    inputBairro.value = endereco.bairro;
    inputCidade.value = endereco.localidade;
    inputUF.value = endereco.uf;
}

/*let ceps = ['01001000','83601720'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));*/

/*
    utilizando ASYNC / AWAIT também é possível criar uma função assíncrona;

    AWAIT fará a vez do THEN para gerar a promise;

    TRY para tentar realizar o objetivo antes de pegar o erro com CATCH;

    PROMISE.ALL serve para quando houverem várias requisições feitas ao mesmo tempo
*/
