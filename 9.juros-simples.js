
/**
 * J = C.i.n
Onde:

J = juros,
C = capital,
i = taxa de empréstimo
n = períodos
 */
var assert = require('assert');

//
// Calcula o juros simples
//
var juros_simples = function(capital, taxa, periodo) {
    return (capital * taxa * periodo)
}

// Este é o nosso teste.
// Sabemos que 16000 * 0.04 * 4 = 2560, logo
// a variável `juros` deve ter o valor igual a 2560.
try {
    assert.equal(2560, juros_simples(16000, 0.04, 4));
} catch(e) {
    console.log(e);
}