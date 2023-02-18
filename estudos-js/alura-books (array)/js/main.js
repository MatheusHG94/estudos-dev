const btnLivros = document.querySelectorAll('.btn');
const sectionLivros = document.querySelector('#livros');

btnLivros.forEach(element => element.addEventListener('click', () => {
    sectionLivros.innerHTML = '';
    const btnID = element.id;
    const btnCategoria = element.value;

    fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    .then(resposta => resposta.json())
    .then(listaLivros => {
        if (btnID == 'btnLivrosDisponiveis') {
            listaLivros.forEach(livro => {
                if (livro.quantidade > 0) {
                    mostraLivro(livro);
                } else {
                    console.log('Livro indisponível:', livro.titulo);
                }
            })
        } else if (btnID == 'btnOrdenarPorPreco') {
            const listaOrdenada = ordenarLivros(listaLivros);
            listaOrdenada.forEach(livro => mostraLivro(livro));
        } else {
            listaLivros.forEach(livro => {
                if (livro.categoria == btnCategoria) {
                    mostraLivro(livro);
                } else {
                    console.log('Livro de outra categoria:', livro.titulo);
                }
            })
        }
    });
}))

function mostraLivro(livro) {
    const novoLivro = document.createElement('div');
        
    const imgLivro = document.createElement('img');
    imgLivro.classList.add('livro__imagens');
    imgLivro.src = `${livro.imagem}`;
    imgLivro.alt = `${livro.alt}`;

    const tituloLivro = document.createElement('h2');
    tituloLivro.classList.add('livro__titulo');
    tituloLivro.innerHTML = `${livro.titulo}`;

    const autorLivro = document.createElement('p');
    autorLivro.classList.add('livro__descricao');
    autorLivro.innerHTML = `${livro.autor}`;

    const precoLivro = document.createElement('p');
    precoLivro.classList.add('livro__preco');
    precoLivro.id = 'preco';
    precoLivro.innerHTML = `${livro.preco}`;

    const tagsLivro = document.createElement('div');
    tagsLivro.classList.add('tags');

    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.innerHTML = `${livro.categoria}`;

    tagsLivro.appendChild(tag);

    novoLivro.appendChild(imgLivro);
    novoLivro.appendChild(tituloLivro);
    novoLivro.appendChild(autorLivro);
    novoLivro.appendChild(precoLivro);
    novoLivro.appendChild(tagsLivro);

    sectionLivros.appendChild(novoLivro);
}

function ordenarLivros(listaLivros) {
    let listaOrdenada = listaLivros.sort((l1, l2) => (l1.preco > l2.preco) ? 1 : (l1.preco < l2.preco) ? -1 : 0);

    return listaOrdenada;
}

/*function mostraLivros(listaLivros, btnCategoria, btnID) {
    console.log(listaLivros);
    sectionLivros.innerHTML = '';
    
    if(btnID == 'btnLivrosDisponiveis') {
        listaLivros.forEach(element => {
            if (element.quantidade > 0) {
                const novoLivro = document.createElement('div');
        
                const imgLivro = document.createElement('img');
                imgLivro.classList.add('livro__imagens');
                imgLivro.src = `${element.imagem}`;
                imgLivro.alt = `${element.alt}`;
    
                const tituloLivro = document.createElement('h2');
                tituloLivro.classList.add('livro__titulo');
                tituloLivro.innerHTML = `${element.titulo}`;
    
                const autorLivro = document.createElement('p');
                autorLivro.classList.add('livro__descricao');
                autorLivro.innerHTML = `${element.autor}`;
    
                const precoLivro = document.createElement('p');
                precoLivro.classList.add('livro__preco');
                precoLivro.id = 'preco';
                precoLivro.innerHTML = `${element.preco}`;
    
                const tagsLivro = document.createElement('div');
                tagsLivro.classList.add('tags');
    
                const tag = document.createElement('span');
                tag.classList.add('tag');
                tag.innerHTML = `${element.categoria}`;
    
                tagsLivro.appendChild(tag);
    
                novoLivro.appendChild(imgLivro);
                novoLivro.appendChild(tituloLivro);
                novoLivro.appendChild(autorLivro);
                novoLivro.appendChild(precoLivro);
                novoLivro.appendChild(tagsLivro);
    
                sectionLivros.appendChild(novoLivro);
            } else {
                console.log('Livro indisponível: ', element.titulo);
            }
        })
    } else if (btnID == 'btnOrdenarPorPreco') {
        console.log('livros ordenados por preço')
    } else {
        listaLivros.forEach(element => {
            if (element.categoria == btnCategoria) {
                const novoLivro = document.createElement('div');
    
                const imgLivro = document.createElement('img');
                imgLivro.classList.add('livro__imagens');
                imgLivro.src = `${element.imagem}`;
                imgLivro.alt = `${element.alt}`;
    
                const tituloLivro = document.createElement('h2');
                tituloLivro.classList.add('livro__titulo');
                tituloLivro.innerHTML = `${element.titulo}`;
    
                const autorLivro = document.createElement('p');
                autorLivro.classList.add('livro__descricao');
                autorLivro.innerHTML = `${element.autor}`;
    
                const precoLivro = document.createElement('p');
                precoLivro.classList.add('livro__preco');
                precoLivro.id = 'preco';
                precoLivro.innerHTML = `${element.preco}`;
    
                const tagsLivro = document.createElement('div');
                tagsLivro.classList.add('tags');
    
                const tag = document.createElement('span');
                tag.classList.add('tag');
                tag.innerHTML = `${element.categoria}`;
    
                tagsLivro.appendChild(tag);
    
                novoLivro.appendChild(imgLivro);
                novoLivro.appendChild(tituloLivro);
                novoLivro.appendChild(autorLivro);
                novoLivro.appendChild(precoLivro);
                novoLivro.appendChild(tagsLivro);
    
                sectionLivros.appendChild(novoLivro);
            }
        });
    }
}*/

