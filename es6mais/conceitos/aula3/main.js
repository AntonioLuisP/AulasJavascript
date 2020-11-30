const arr = [1, 3, 4, 5, 8, 9]

const newArr = arr.map(function (item) {
    return item * 2;
})
console.log(newArr)

// total inicia como zero e next como o primeiro elemento
const sum = arr.reduce(function (total, next) {
    return total + next;
})

//retorna os elementos que batem com a condicao
const filter = arr.filter(function (item) {
    return item % 2 === 0;
})

const find = arr.find(function (item) {
    return item === 2;
})
console.log(find)

// arrow functions
const teste = arr.map(item => item * 2)

const teste1 = () => {
    return 'teste';
}
const teste2 = () => 'teste';

const teste3 = () => ['teste', 'teste2'];

const teste3 = () => 4;

const teste4 = () => ({ nome: 'Antonio' })

// valor padrao
function soma(a = 3, b = 5) {
    return a + b;
}
console.log(soma(1))


const usuario = {
    nome: "antonio",
    idade: 23,
    endereco: {
        cidade: "São Luís",
        cidade: "MA",
    },
}

//desestruturacao de obj
const { nome, idade, endereco: { cidade } } = usuario

function mostraNome({ nome, idade }) {
    console.log(nome, idade)

}