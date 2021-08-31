// Lucas Camargo
// Playground Functions

// --------------------------------------------------------------------------------------------------

// Desafio 1
function compareTrue(par1, par2) {
    // seu código aqui
    return par1 && par2;
}
// testando a função
// console.log(compareTrue(true, false));
// console.log(compareTrue(false, false));
// console.log(compareTrue(false, true));
// console.log(compareTrue(true, true));

// --------------------------------------------------------------------------------------------------

// Desafio 2
function calcArea(base, height) {
    // seu código aqui
    return (base * height) / 2
}
// testando a função
// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// --------------------------------------------------------------------------------------------------

// Desafio 3
function splitSentence(string) {
    // seu código aqui
    return string.split(' ');
}
// testando a função
// console.log(splitSentence('go Trybe'));
// console.log(splitSentence('vamo que vamo'));
// console.log(splitSentence('foguete'));

// --------------------------------------------------------------------------------------------------

// Desafio 4
function concatName(array) {
    // seu código aqui
    let firstElement = array.shift();
    let lastElement = array.pop();
    let concatElements = lastElement.concat(', ', firstElement);
    return concatElements;
}
// testando a função
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// console.log(concatName(['captain', 'my', 'captain']));

// --------------------------------------------------------------------------------------------------

// Desafio 5
function footballPoints(wins, ties) {
    // seu código aqui
    return (wins * 3) + ties;

}
// testando a função
// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// --------------------------------------------------------------------------------------------------

// Desafio 6
function highestCount(array) {
    // seu código aqui
    let highestNumber = array[0];
    let timesRepeated = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > highestNumber) {
            highestNumber = array[i];
        }
    }
    for (i = 0; i < array.length; i++) {
        if (array[i] === highestNumber) {
            timesRepeated++;
        }
    }
    return timesRepeated;
}
// testando a função
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// --------------------------------------------------------------------------------------------------

// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// --------------------------------------------------------------------------------------------------

// Desafio 8
function fizzBuzz() {
    // seu código aqui
}

// --------------------------------------------------------------------------------------------------

// Desafio 9
function encode() {
    // seu código aqui
}

// --------------------------------------------------------------------------------------------------

function decode() {
    // seu código aqui
}

// --------------------------------------------------------------------------------------------------

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