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
/*
    FETCH faz a requisição que, quando chamada, iniciará uma promise e rodará em segundo plano até ser concluída;

    THEN manipula o retorno da requisição;

    o método .json() é necessário para transformar o retorno, que chega em bytes, em um objeto js;

    a condicional dentro do segundo then vai capturar os CEPs de formato válido, mas inexistentes, e jogará (THROW) o erro para o catch;

    CATCH serve para capturar os erros;

    FINALLY ocorre ao final do processo
*/

console.log(consulta);
