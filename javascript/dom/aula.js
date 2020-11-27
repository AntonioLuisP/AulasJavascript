function mostraAlerta(){
    alert('clicou no botao')
}

function exibe(value){
    console.log(value)
}

var boxElement = document.querySelector('div[class=box]')
boxElement.style.width = 100;
boxElement.style.height = 100;
boxElement.style.backgroundColor = '#f00';

var inputElement = document.querySelector('body div#app2 input#nome')
var inputElement2 = document.querySelector('input[id=nome]')
console.log(inputElement)
console.log(inputElement2)

var btnTeste  =document.querySelector('button[id=teste]')
btnTeste.onclick = function (){
    var text = this.textContent
    alert('botao ' +  text +  ' clicado')
}

var linkElement = document.createElement('a')

linkElement.setAttribute('href', 'http://rocketseat.com.br')
linkElement.setAttribute('title', 'site da rocketseat')

var textElement = document.createTextNode('Acessar site da rocketseat')
linkElement.appendChild(textElement)

var appElement = document.getElementById('app3')
appElement.appendChild(linkElement)

var inputElement3 = document.querySelector('body div#app3 input#nome')

appElement.removeChild(inputElement3)
