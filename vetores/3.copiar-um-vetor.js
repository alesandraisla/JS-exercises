// let a = [1, 2]
// console.log(a); // [ 1, 2 ]

// let b = a.slice()
// console.log(b); // [ 1, 2 ]

// a.push(3)
// console.log(a); // [ 1, 2, 3 ]
// console.log(b); // [ 1, 2, 3 ]

var assert = require('assert');


let clonar = function(data) {
    let clone = []
    for(let i = 0; i < data.length; i++) {
        clone.push(data[i])
    }
    return clone;
}

console.log(clonar([10, 20, 30, 0]))

//
// Seu teste
//
try {

    assert.deepEqual([10, 20, 30, 0], clonar([10, 20, 30, 0]));

} catch(e) {
    console.log(e);
}

//Para comparar dois arrays precisamos usar deepEqual() ao 
//invés de equal().