//template literals
const nome1 = "antonio"
const idade1 = 23

//mt demorado de escrever
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos')

// mais rapido de escrever
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

//object short sintax

const nome = "antonio"
const idade = 23

const usuario = {
    nome,
    idade,
    empresa: 'Rocketseat',
}
console.log(usuario)