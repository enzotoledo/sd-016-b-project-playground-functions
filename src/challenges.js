// Desafio 1
function compareTrue(valueA, valueB) {
  // seu código aqui
  if (valueA === true && valueB === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = ((base * altura) / 2);
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array; 
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let novoArray = array.reverse();
  let primeiroElemento = novoArray[0];
  let ultimoElemento = novoArray[novoArray.length - 1];
  return (primeiroElemento + ', ' + ultimoElemento);
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitorias = wins * 3;
  let empate = ties * 1;
  let total = vitorias + empate;
  return total;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = numeros[0];
  let vezesQueAparece = 0;

  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNumero) {
      maiorNumero = numeros[index];
    }
  }
  for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (numeros[index2] === maiorNumero) {
      vezesQueAparece += 1;
    }
  }
  return vezesQueAparece;
}
console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
//   // seu código aqui
  if (Math.abs(cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let frase = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      frase.push('fizzBuzz');
    } else if (numeros[index] % 5 === 0) {
      frase.push('buzz');
    } else if (numeros[index] % 3 === 0) {
      frase.push('fizz');
    } else {
      frase.push('bug!');
    }
  }
  return frase;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let splitString = string.split('');
  let arrayNovo = [];

  for (let index = 0; index < splitString.length; index += 1) {
    if (splitString[index] === 'a') {
      arrayNovo.push('1');
    } else if (splitString[index] === 'e') {
      arrayNovo.push('2');
    } else if (splitString[index] === 'i') {
      arrayNovo.push('3');
    } else if (splitString[index] === 'o') {
      arrayNovo.push('4');
    } else if (splitString[index] === 'u') {
      arrayNovo.push('5');
    } else {
      arrayNovo.push(splitString[index]);
    }
  }
  let stringNova = arrayNovo.join('');
  return stringNova;
}
console.log(encode('hi there!'));

function decode(string) {
  // seu código aqui
  let splitString2 = string.split('');
  let arrayNovo2 = [];

  for (let index = 0; index < splitString2.length; index += 1) {
    if (splitString2[index] === '1') {
      arrayNovo2.push('a');
    } else if (splitString2[index] === '2') {
      arrayNovo2.push('e');
    } else if (splitString2[index] === '3') {
      arrayNovo2.push('i');
    } else if (splitString2[index] === '4') {
      arrayNovo2.push('o');
    } else if (splitString2[index] === '5') {
      arrayNovo2.push('u');
    } else {
      arrayNovo2.push(splitString2[index]);
    }
  }
  let stringNova2 = arrayNovo2.join('');
  return stringNova2;
}
console.log(decode('h3 th2r2!'));




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
