//Funcao calcular o dobro de um numero qualquer

var assert = require('assert');

//
// Função que retorna o dobro de um número qualquer
//
var dobro = function(num) {

    // Aqui entra a lógica do programa.
    return num * num

}

//
// Testes
//
try {
    assert.equal(10, dobro(5));
} catch(e) {
    console.log(e);
}
