/**
 * Crie uma função que descubra se um valor é par ou ímpar.

Neste exercício nós utilizarmos o operador módulo %.

A operação módulo encontra o resto da divisão de um número por outro.

Dados dois números a (o dividendo) e b o divisor, a modulo b (a mod b) é o resto da divisão de a por b.

Por exemplo, 7 mod 3 seria 1, enquanto 9 mod 3 seria 0.

Portanto sua função deve…

retornar 1 ou mais caso negativo (é ímpar) e
retornar 0 caso positivo (é par)
 * 
 */

var assert = require('assert');

//
// Função que descobre se um número é par ou ímpar
//
var ehPar = function(numero) {
    if(numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(ehPar(2))
console.log(ehPar(5))
console.log(ehPar(7))

//
// Testes
//
try {
    assert.ok(ehPar(8));
    assert.ok(!ehPar(7));
    assert.ok(ehPar(0));
} catch(e) {
    console.log(e);
}