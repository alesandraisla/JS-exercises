let inverterString = function(text) {
    let letra = text.split('')
    letra.reverse();
    return letra.join('')
}

console.log(inverterString('alesandra'))
console.log(inverterString('lourivaldo'))
console.log(inverterString('zoe'))

