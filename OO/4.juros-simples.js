var assert = require('assert');

let juros = new Object();

juros.simples = function() {

    return this.capital * this.taxa * this.periodo;

}

try {

    //
    // Teste
    //

    // Repare que NÂO instanciamos o objeto
    juros.capital = 16000;
    juros.taxa = 0.04;
    juros.periodo = 4;
    assert.equal(2560, juros.simples());

} catch(e) {
    console.log(e);
}