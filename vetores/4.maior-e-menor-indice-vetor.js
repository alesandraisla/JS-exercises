/**
 * Dado um vetor qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.

Repare que eu quero o índice e não o valor daquele índice.
 */

var assert = require('assert');

var arr    = [6, 10, 4, 21, 9],
    iMaior = 0,
    iMenor = 0,
    i =0;

//
// Sua lógica
//

for (const indice in arr) {
    if(arr[indice] > arr[iMaior]){
        iMaior = indice
        console.log(`maior ${iMaior}`)
    }

    if(arr[indice] < arr[iMenor]) {
        iMenor = indice
        console.log(iMenor)
    }
}
//ou
/*
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[iMaior]) {
        iMaior = i;
    }
    if(arr[i] < arr[iMenor]) {
        iMenor = i
    }
}
*/

//
// Seu teste
//
try {

    assert.equal(3, iMaior);
    assert.equal(2, iMenor);

} catch(e) {
    console.log(e);
}