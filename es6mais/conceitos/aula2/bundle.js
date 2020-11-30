"use strict";

//não pode mudar
var a = 1; //pode mudar os valores internos mas não a forma

var usuario = {
  nome: "antonio"
};
usuario.nome = "teste";

function teste(x) {
  // y variavel de escopo
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
