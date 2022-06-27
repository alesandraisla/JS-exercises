var assert = require('assert');

function Calc(){

    this.dobro = function(num){

        return num * 2;

    }

};

try {

    var calc = new Calc();
    assert.equal(10, calc.dobro(5));

} catch(e) {
    console.log(e);
}