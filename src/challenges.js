// Lucas Camargo
// Playground Functions

// --------------------------------------------------------------------------------------------------

// Desafio 1
function compareTrue(par1, par2) {
    // seu código aqui
    return (par1 && par2);
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
    return (base * height) / 2;
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
function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    positionCat1 = Math.abs(cat1 - mouse);
    positioncat2 = Math.abs(cat2 - mouse);
    if (positionCat1 < positioncat2) {
        return "cat1";
    } else if (positionCat1 > positioncat2) {
        return "cat2";
    } else {
        return "os gatos trombam e o rato foge";
    }
}
// testando a função
// console.log(catAndMouse(0, 3, 2));
// console.log(catAndMouse(0, 6, 12));
// console.log(catAndMouse(1, 0, 2));

// --------------------------------------------------------------------------------------------------

// Desafio 8
function fizzBuzz(array) {
    // seu código aqui
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0 && array[i] % 5 === 0) {
            newArray.push('fizzBuzz');
        } else if (array[i] % 3 === 0) {
            newArray.push('fizz');
        } else if (array[i] % 5 === 0) {
            newArray.push('buzz');
        } else {
            newArray.push('bug!');
        }
    }
    return newArray;
}
// testando a função
// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// console.log(fizzBuzz([7, 9]));
// console.log(fizzBuzz([9, 25]));

// --------------------------------------------------------------------------------------------------

// Desafio 9
function encode(string) {
    // seu código aqui
    let newString = '';
    for (let i = 0; i < string.length; i += 1) {
        switch (string[i]) {
            case 'a':
                string = string.replace('a', '1');
                break;
            case 'e':
                string = string.replace('e', '2');
                break;
            case 'i':
                string = string.replace('i', '3');
                break;
            case 'o':
                string = string.replace('o', '4');
                break;
            case 'u':
                string = string.replace('u', '5');
                break;
        }
        newString = string;
    }
    return newString;
}
// testando a função
// console.log(encode("hello"));
// console.log(encode('go Trybe!'));
// console.log(encode('How are you today?'));
// console.log(encode('This is an encoding test.'));
// console.log(encode('go Trybe!'));

// --------------------------------------------------------------------------------------------------

function decode(string) {
    // seu código aqui
    let newString = '';
    for (let i = 0; i < string.length; i += 1) {
        switch (string[i]) {
            case '1':
                string = string.replace('1', 'a');
                break;
            case '2':
                string = string.replace('2', 'e');
                break;
            case '3':
                string = string.replace('3', 'i');
                break;
            case '4':
                string = string.replace('4', 'o');
                break;
            case '5':
                string = string.replace('5', 'u');
                break;
        }
        newString = string;
    }
    return newString;
}
// testando a função
// console.log(decode('h2ll4'));
// console.log(decode('H4w 1r2 y45 t4d1y?'));
// console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));
// console.log(decode('g4 Tryb2!'));
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