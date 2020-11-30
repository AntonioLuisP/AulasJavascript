"use strict";

//template literals
var nome1 = "antonio";
var idade1 = 23; //mt demorado de escrever

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos'); // mais rapido de escrever

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos")); //object short sintax

var nome = "antonio";
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Rocketseat'
};
console.log(usuario);
