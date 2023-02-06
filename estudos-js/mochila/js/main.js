const form = document.querySelector('.form-js');
const itens = JSON.parse(localStorage.getItem('itens')) || []; // uso do operador lógico na atribuição de const

itens.forEach(element => { // puxa os elementos do localStorage ao carregar a página
    criaElemento(element);
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); // bloqueia a ação padrão do envio de formulários, evitando erros

    // criando o objeto
    const nome = event.target.elements['nome']; // a string entre as chaves se comunica com os elementos do evento através do 'name' ou 'id' 
    const quantidade = event.target.elements['quantidade'];
    const item = { //objeto
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    // controle do fluxo de dados
    const existe = itens.find( elemento => elemento.nome === nome.value ); // retorna, se existir, o objeto do array itens que possuir o 'nome' igual ao valor da const 'nome'. Se não existir, retorna undefined
    if (existe) { // se 'existe' for undefined, terá valor false e executará o bloco else
        item.id = existe.id;

        atualizaElemento(item);

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = item;
    } else {
        item.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;

        criaElemento(item);
    
        itens.push(item); // adiciona o objeto item ao final de um array
    }

    atualizaStorage();
    
    // limpa os campos do formulário após enviar
    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item) { 
    const lista = document.querySelector('.lista-js');
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const quantidadeItem = document.createElement('strong');
    quantidadeItem.innerText = item.quantidade;
    quantidadeItem.dataset.id = item.id;
    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(criaBotaoDeletar(item.id));

    lista.appendChild(novoItem);
}

function criaBotaoDeletar(id) {
    const botao = document.createElement('button');
    botao.innerHTML = 'X';
    botao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id);
    });

    return botao;
}

function deletaElemento(elemento, id) {
    elemento.remove();

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
    
    atualizaStorage();
}

function atualizaElemento(item) {
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade;
}

function atualizaStorage() {
    localStorage.setItem('itens', JSON.stringify(itens)); // salva o array no localStorage | JSON.stringify(x) transforma x em string
}

