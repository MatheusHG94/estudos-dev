// function expression, pode nomear

function sum (n1, n2) {
    return n1 + n2;
}

console.log('Função normal: a soma é', sum(3, 2));
console.log('');

// anonym function

const dif = (n1, n2) => {
    return n1 - n2;
}

console.log('Função anônima: a diferença é', dif(5, 2));
console.log('');

// arrow function, anônima, com return

const soma = (n1, n2) => {
    return n1 + n2;
}

console.log('Arrow function: a soma é', soma(1, 2));
console.log('');

// arrow function sem return (não colocar chaves)

const noReturn = (n1, n2) => n1 + n2;

console.log('AF sem return: a soma é', noReturn(15, 5));
console.log('');

// arrow function sem parâmetros

const comunidade = () => 'indígena';

console.log('AF sem parâmetros: comunidade', comunidade());
console.log('');

// arrow function com apenas um parâmetro, não precisa dos parênteses

const dobro = num => num * 2;

console.log('AF com apenas 1 parâmetro: o dobro de 5 é', dobro(5));
console.log('');

// arrow function com retorno de objeto literal (JSON), pode-se usar parênteses no lugar das chaves da função

const pessoa = () => ({nome: 'Matheus', idade: '28'});

console.log(pessoa());
console.log('');

// função anônima auto-invocatória: envolve em parênteses e chama com abre-fecha parênteses logo em seguida; a função anônima que envolve a AF limita o escopo dessa AF

(function () {
    const getPerson = () => ({nome: 'Marcela', olho: 'preto'});

    console.log(getPerson());
})();

console.log('');

// AF auto-invocatória

(() => {
    const getPerson = () => ({nome: 'Joana', profissão: 'espadachim'});

    console.log(getPerson());
})();

console.log('');

// this, em AF é muito mais previsível, referenciando o escopo local

(() => {
    function Person() {
        this.age = 0;

        setInterval(() => {
            this.age++;
            console.log('Qual this?', this);
            console.log('Qual a idade?', this.age);
        }, 2000);
    }

    //const newPerson = new Person();
})();
