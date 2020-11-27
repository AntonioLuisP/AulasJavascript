var body = document.querySelector('body')

// 1 questao
function criaQuadrado() {
    var quadrado = document.createElement('div.quadrado')
    quadrado.appendChild(document.createTextNode('Acessar site da rocketseat'))
    quadrado.setAttribute('onclick', 'alteraCor(this)')
    //ISSO AQUI N TA FAZENDO UM QUADRADO N SEI PQ SE O CODIGO É O MESMO
    quadrado.style.width = 100;
    quadrado.style.height = 100;
    quadrado.style.backgroundColor = '#f00';
    body.appendChild(quadrado)
}

// 2 questao
function alteraCor(element) {
    element.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 3 questao

var nomes = ["Diego", "Gabriel", "Lucas"];

function lista(nomes){
    var lista = document.querySelector('body div#lista ul#lista')
    for (let index = 0; index < nomes.length; index++) {
        var linha = document.createElement('li')
        linha.innerText = nomes[index]
        lista.appendChild(linha)
    }
}
lista(nomes)

// 4 questao
function adicionar(){
    var input = document.querySelector('body div#lista input');
    var value = input.value;
    input.value = "";
    var lista = document.querySelector('body div#lista ul#lista');
    var linha = document.createElement('li');
    linha.innerText = value;
    lista.appendChild(linha)
}