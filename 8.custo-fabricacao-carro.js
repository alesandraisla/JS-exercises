/**
 * O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:

custo final = custo de fábrica +
              (custo de fábrica * percentual do distribuidor) +
              (custo de fábrica * percentual de impostos)
Considerando os valores abaixo, faça um programa para calcular o custo de fabricação.

Custo de fábrica = 10.000,00
Percentual do distribuidor = 28%
Percentual dos Impostos  = 45%
 * 
 */

var assert = require('assert');

//
// Retorna o custo final da fabricação de um carro
//
var custoFinal = function(fabrica) {
    let distribuidor = fabrica * 0.28;
    let impostos = fabrica * 0.45;

    return fabrica + distribuidor + impostos
}

console.log(custoFinal(10000))
//
// Seu teste
//

try {
    assert.equal(17300, custoFinal(10000));
} catch(e) {
    console.log(e);
}