// 1 questao
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
function recebeObj(endereco) {
    console.log('O usuário mora em ' + endereco.cidade + ' / ' + endereco.uf + ', no bairro ' + endereco.bairro + ', na rua "' + endereco.rua + '" com nº ' + endereco.numero + ".")
}
recebeObj(endereco)


// 2 questao
function pares(x, y) {

}
pares(32, 321);


// 3 questao
function temHabilidade(skills) {
    var teste = skills.indexOf("Javascript")
    return (teste == -1) ? false : true
}

var skills = ["Javascript", "ReactJS", "React Native"]

var sim = temHabilidade(skills)
console.log(sim)

// 4 questao
function experiencia(anos) {
    if (anos >= 0) {
        if (anos <= 1) {
            console.log("Iniciante")
        } else if (anos > 1 && anos <= 3) {
            console.log("Intermediário")
        } else if (anos > 3 && anos <= 7) {
            console.log("Avançado")
        } else {
            console.log("Jedi Master")
        }
    } else {
        console.log("Coloque um tempo maior ou igual a zero")
    }
}

var anosEstudos = -1;
experiencia(anosEstudos)


// 5 questao
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function suasHabilidades(pessoas) {
    pessoas.forEach(pessoa => {
        var mensagem = "";
        mensagem += "O " + pessoa.nome + " possui as habilidades: "
        pessoa.habilidades.forEach(habilidade => {
            mensagem += '"' + habilidade + '", '
        });
        console.log(mensagem)
    });

}
suasHabilidades(usuarios)