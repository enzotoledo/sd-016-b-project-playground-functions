// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 == true) && (value2 == true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height)/2);
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4
function concatName(array) {
  var namae = ''
  namae += array[array.length - 1];
  namae += ", ";
  namae += array[0];

  return namae; 
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3) + ties)
}

// Desafio 6
function highestCount(Numbers) {
  let max = Math.max.apply(null, Numbers)
  let contagem = 0

  for( let i=0; i < Numbers.length; i+=1) {
    if (max === Numbers[i])
    contagem+=1;
  }

  return contagem;
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
function encode(array) {
  let array1 = array.replace(/[a]/g, '1');
  let array2 = array1.replace(/[e]/g, '2');
  let array3 = array2.replace(/[i]/g, '3');
  let array4 = array3.replace(/[o]/g, '4');
  let array5 = array4.replace(/[u]/g, '5');
return array5;
}

function decode(array) {
  let array1 = array.replace(/[1]/g, 'a');
  let array2 = array1.replace(/[2]/g, 'e');
  let array3 = array2.replace(/[3]/g, 'i');
  let array4 = array3.replace(/[4]/g, 'o');
  let array5 = array4.replace(/[5]/g, 'u');
return array5;
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
