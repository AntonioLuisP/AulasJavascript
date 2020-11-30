"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // total inicia como zero e next como o primeiro elemento

var sum = arr.reduce(function (total, next) {
  return total + next;
}); //retorna os elementos que batem com a condicao

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
var find = arr.find(function (item) {
  return item === 2;
});
console.log(find);
