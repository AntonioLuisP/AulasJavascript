// 1 questao

class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }
    isAdmin() {
        return false;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }

    isAdmin() {
        return this.admin;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// 2 questao
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

var idades = usuarios.map(item => {
    return item.idade
})
console.log(idades)

var seletos = usuarios.filter(item => {
    return item.idade >= 18 && item.empresa == 'Rocketseat'
})
console.log(seletos)

var googleWorker = usuarios.find(item => {
    return item.empresa == 'Google'
})
console.log(googleWorker)

var opsM = usuarios.map(item => {
    item.idade *= 2
    return item
})

var opsF = opsM.filter(item => {
    return item.idade <= 50
})
console.log(opsF)

// 3 questao

const arr = [1, 2, 3, 4, 5]

var teste = arr.map(item => item + 10)
console.log("Teste " + teste)

const usuario = {
    nome: "Diego",
    idade: 23
}
const idade = (usuario) => usuario.idade
// const idade = usuario => usuario.idade // quando é só um parametro da pra ir assim

const mostraUser = (nome = 'diego', idade = 18) => ({ nome, idade })
console.log(mostraUser())
console.log(mostraUser('antonio', 23))
console.log(mostraUser('antonio'))


const promessa = () => new Promise((resolve, reject) => resolve())
console.log(promessa())

// 4 questao
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
// console.log(mostraInfo(usuario)) // tambem passa

// 5 questao

const [x, ...y] = arr
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//rest
const soma = (...y) => y.reduce((total, next) => (total + next))
console.log("soma " + soma(1, 2, 3, 4, 5, 6))

//spread
const user = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
}
console.log(user)
const usuario2 = { ...user, nome: "Gabriel" }
console.log(usuario2)

// nao consegui
// const usuario3 = { ...user, { endereco, cidade: "Lontras"}}
// console.log(usuario3)

//6 questao
const pessoa = 'Diego';
const age = 23;
console.log(`O usuario ${pessoa} possui ${age}`)

// 7 questao

const nome2 = 'Diego';
const idade2 = 23;
const teste2 = {
    nome2,
    idade2,
    cidade: 'Rio do Sul',
};
console.log(teste2)