const btnLivros = document.querySelectorAll('.btn');
const sectionLivros = document.querySelector('#livros');

btnLivros.forEach(element => element.addEventListener('click', () => {
    const btnValue = element.value;
    const btnID = element.id;

    fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    .then(resposta => resposta.json())
    .then(data => mostrarLivros(data, btnValue, btnID))
}))

function mostrarLivros(listaLivros, btnCategoria, btnID) {
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
}

