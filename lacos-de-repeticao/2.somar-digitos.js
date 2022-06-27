var assert = require('assert');

var somarDigitos = function(numero) {
    let somar = 0
    
    while(numero != 0) {
        somar += numero % 10;
        numero = parseInt(numero /10)
        //parseInt -> converte o resultado para um tipo inteiro
    }
    return somar

}

somarDigitos(2015)
console.log(somarDigitos(2015))


//
// Testes
//
try {

    assert.equal(8, somarDigitos(2015));
    assert.equal(15, somarDigitos(456));

} catch(e) {
    console.log(e);
}