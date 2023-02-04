const form = document.querySelector('.form-js');
const lista = document.querySelector('.lista-js');
const itens = [];

form.addEventListener('submit', (e) => {
    e.preventDefault(); //bloqueia a ação padrão do envio de formulários, evitando erros

    const nome = e.target.elements['nome']; //a string entre as chaves se comunica com os elementos do evento através do 'name' ou 'id' 
    const quantidade = e.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value);
    salvaElemento(nome.value, quantidade.value);

    nome.value = ""; //limpa o campo do formulário após enviar
    quantidade.value = "";
});

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    //novoItem.innerHTML = `<strong>${quantidade}</strong>${nome}`;
    const novaQuantidade = document.createElement('strong');
    novaQuantidade.innerText = quantidade;
    novoItem.appendChild(novaQuantidade);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);
}

function salvaElemento(nome, quantidade) {
    const item = { //objeto
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(item); //adiciona o objeto item ao final de um array

    localStorage.setItem("itens", JSON.stringify(itens)); //salva o array no localStorage | JSON.stringify(x) transforma x em string
}

