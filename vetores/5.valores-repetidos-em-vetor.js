/**
 * Faça um programa que identifique se em um determinado vetor, existem ou não valores repetidos.
 * 
 */

 var assert = require('assert');

 var haDuplicados = function(arr) {
    for(let index = 0; index < arr.length; index++) {
        if(arr.indexOf(arr[index]) != index){
            return true;
        }
    }
    return false;
 }

 console.log(haDuplicados([100, 200, 300, 300, 500]))
 
 //
 // Seu teste
 //
 try {
 
     assert.equal(true, haDuplicados([100, 200, 300, 300, 500]));
     assert.equal(false, haDuplicados([100, 200, 300, 400, 500]));
 
 } catch(e) {
     console.log(e);
 }