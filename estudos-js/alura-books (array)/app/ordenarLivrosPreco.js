const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco() {
    let livrosOrdenados = livros.sort((livro1, livro2) => livro1.preco - livro2.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}
