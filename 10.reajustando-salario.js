/**
 * Faça um algoritmo que calcule o reajuste de um salário, 
 * utilize os seguintes dados:

salário  = 1.000,00
reajuste = 15%,
 * 
 */

var assert = require('assert');

//
// Reajusta o salário
//
var reajustar_salario = function(salario, reajuste) {
    return salario * reajuste;
}

reajustar_salario(1000, 0.15)

console.log(reajustar_salario(1000, 0.15))


// Este é o nosso teste.
// Sabemos que 1000 * 0.15 = 150, logo
// a função `reajustar_salario` deve ter o valor igual a 150.
try {
    assert.equal(150, reajustar_salario(1000, 0.15));
} catch(e) {
    console.log(e);
}