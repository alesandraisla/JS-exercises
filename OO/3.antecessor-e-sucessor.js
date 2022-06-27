var assert = require('assert');

//
// Um objeto literal
//
var Calc = {

    antecessor: function(num) {
        return num - 1;
    },

    sucessor: function(num) {
        return num + 1;
    }
}

try {

    assert.equal(9, Calc.antecessor(10));
    assert.equal(11, Calc.sucessor(10));

} catch(e) {
    console.log(e);
}