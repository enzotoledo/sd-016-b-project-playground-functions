// Lucas Camargo
// Playground Functions

// Desafio 1
console.log('Desafio 1')

function compareTrue(num1, num2, num3) {
    // seu código aqui
    if (num1 > num2 && num1 > num3) {
        return true;
    } else {
        return false
    }
}
// testando a função
console.log(compareTrue(1, 2, 3));
console.log(compareTrue(3, 2, 1));
console.log(compareTrue(4, 5, 6));
console.log(compareTrue(6, 5, 4));
console.log(compareTrue(7, 8, 9));
console.log(compareTrue(9, 8, 7));
console.log(compareTrue(-1, 0, 1));
console.log(compareTrue(1, 0, -1));

// Desafio 2
console.log('Desafio 2')

function calcArea() {


}
// testando a função
console.log((a));

// Desafio 3
function splitSentence() {
    // seu código aqui
}

// Desafio 4
function concatName() {
    // seu código aqui
}

// Desafio 5
function footballPoints() {
    // seu código aqui
}

// Desafio 6
function highestCount() {
    // seu código aqui
}

// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};