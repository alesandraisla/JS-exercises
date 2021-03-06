var assert = require('assert');

// Função que descobre se o número é ou não primo.
//
// Retorna:
//   0 para false (composto)
//   1 para true  (primo)
//
var ehPrimo = function(num) {
    let quantidadeDivisores = 0;

    for(let i = 1; i <= num; i++) {
        if(ehDivisaoExata(num, i)) {
            quantidadeDivisores++
        }
    }
    if(quantidadeDivisores == 2) {
        return 1;
    } else {
        return 0;
    }
}

// Função que descobre se dois números possuem divisão exata.
//
// Retorna:
//   0 para false
//   1 para true
//
var ehDivisaoExata = function(dividendo, divisor) {
    return (dividendo % divisor) == 0 ;
}

console.log(ehDivisaoExata(10, 5))
console.log(ehDivisaoExata(3, 2))

console.log(ehPrimo(10))
console.log(ehPrimo(3))

console.log(ehPrimo(2))

//
// Testes
//
try {

    assert.equal(1, ehDivisaoExata(3, 1));
    assert.equal(1, ehDivisaoExata(3, 3));
    assert.equal(0, ehDivisaoExata(3, 2));

    assert.equal(1, ehPrimo(2));
    assert.equal(1, ehPrimo(3));
    assert.equal(1, ehPrimo(5));
    assert.equal(1, ehPrimo(7));
    assert.equal(1, ehPrimo(11));
    assert.equal(1, ehPrimo(13));

    assert.equal(0, ehPrimo(4));
    assert.equal(0, ehPrimo(6));
    assert.equal(0, ehPrimo(9));
    assert.equal(0, ehPrimo(10));
    assert.equal(0, ehPrimo(12));

} catch(e) {
    console.log(e);
}