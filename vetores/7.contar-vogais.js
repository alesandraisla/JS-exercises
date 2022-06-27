/**
 * Faça um programa que descubra a quantidade 
 * de vogais de uma determinada string.
 * 
 */

 var assert = require('assert');

 var contarVogais = function(palavra) {
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let totalVogal = 0

    for(let i = 0; i < palavra.length; i++) {
        if(vogais.indexOf(palavra[i]) != -1){
            totalVogal++
        }
    }
 
    return totalVogal
 }

 console.log(contarVogais("abecedario"))
 
 
 //
 // Seu teste
 //
 try {
     assert.equal(6, contarVogais("abecedario"));
 } catch(e) {
     console.log(e);
 }