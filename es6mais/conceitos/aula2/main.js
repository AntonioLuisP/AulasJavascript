//não pode mudar
const a = 1;

//pode mudar os valores internos mas não a forma
const usuario = {
    nome: "antonio"
}
usuario.nome = "teste"

function teste(x) {
    // y variavel de escopo
    let y = 2;
    if (x > 5) {
        console.log(x, y)
    }
}
teste(10)