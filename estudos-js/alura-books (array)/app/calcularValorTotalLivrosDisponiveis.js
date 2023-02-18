function calculaValorTotalLivrosDisponiveis(livros) {
    return livros.reduce((total, livro) => total + livro.preco, 0).toFixed(2);
}
