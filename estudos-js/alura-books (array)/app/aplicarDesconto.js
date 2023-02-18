function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => { // a função map funciona parecido com um forEach, aplicando algo a cada elemento do array, mas retorna um novo array ao final
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // '...livro' cria esse objeto como uma cópia do objeto livro, trazendo tudo o que tinha nele, alterando apenas o que está após a vírgula
    });
    return livrosComDesconto;
}
