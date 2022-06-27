/**
 * Exercício de lógica de programação
Faça um programa para calcular o MDC (máximo divisor comum) 
entre dois números.

Aconselho a utilizar o método de divisões sucessivas, 
pois você verá que a forma como costumamos resolver problemas 
matemáticos na mão nem sempre é o melhor caminho quando estamos codificando.
 * 
 */

var assert = require('assert');

//
// Função mdc
//
var mdc = function(num1, num2) {

    let resto;

    do{
        resto = num1 % num2;

        num1 = num2;
        num2 = resto;
    } while(resto != 0);
    return num1;
}

console.log(mdc(24, 9))

//
// Testes
//
try {

    assert.equal(3, mdc(24, 9));
    assert.equal(10, mdc(30, 20));

} catch(e) {
    console.log(e);
}