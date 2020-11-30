// rest
const usuario = {
    nome: "antonio",
    idade: 23,
    empresa: "Rocketseat"
}
//desestruturacao de obj
const { nome, ...resto } = usuario
console.log(nome)
console.log(resto)


const teste = [1, 2, 3, 4]
const [a, b, ...c] = teste
console.log(a)
console.log(b)
console.log(c)

function soma(a, b, ...params) {
    return params;
}
console.log(soma(1, 2, 3, 4))

// spread 

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [ ...arr1, ...arr2]
console.log(arr3)

const usuario1 = {
    nome: "antonio",
    idade: 23,
    empresa: "Rocketseat"
}

const usuario2 = { ...usuario1, nome: "Gabriel"}

console.log(usuario2)