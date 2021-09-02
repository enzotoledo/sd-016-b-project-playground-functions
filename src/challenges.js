// Desafio 1
function compareTrue(x, y) {
  if ((x === true) && (y === true)) {
    return true;
  } else {
    return false;
  }
}

// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth)/ 2;
}
// console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  const array = string.split(" ")
  return array;
  }
  
// console.log(splitSentence("vamo que vamo"));

// Desafio 4
function concatName(ArrString) {
  let lastNum = ArrString[ArrString.length - 1] + ", " + ArrString[0];
  return lastNum;
}

// console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'))

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins*3;
  ties = ties;
  return wins + ties;
}
// console.log(footballPoints(1, 2));


// Desafio 6

function highestCount(numeros) {
  let numeroRepetido = 0;
  let maiorNumero = numeros[0];
// pega o maior valor do array
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNumero) {
      maiorNumero = numeros[index];
    }

  }
// pega a repetição do maior numero
  for (let index = 0; index < numeros.length; index += 1) {
    if (maiorNumero === numeros[index]) {
      numeroRepetido += 1;
    }
}

return numeroRepetido;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    return 'cat1';
  } else if ((Math.abs(cat1 - mouse)) > (Math.abs(cat2 - mouse))) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
  
}

// console.log(catAndMouse(1, 3, 2));


// Desafio 8
function fizzBuzz(arrNumber) {
  // seu código aqui
  let resultado = [];
  for (let index = 0; index < arrNumber.length; index += 1) {
    if(arrNumber[index] % 3 === 0 && arrNumber[index] % 5 ===0) {
      resultado.push("fizzBuzz");
    } else if(arrNumber[index] % 5 === 0) {
      resultado.push("buzz");
    } else if(arrNumber[index] % 3 === 0) {
      resultado.push("fizz");
    } else {
      resultado.push("bug!");
    }
  }
  
  return resultado;
}

// console.log(fizzBuzz([7, 9, 45]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let parametro = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  strinSplit = string.split('')
  for (let index = 0; index < string.length; index += 1) {
    for (let key in parametro) {
      if (strinSplit[index] === key) {
        strinSplit[index] = parametro[key];
      }
    }
  }
  resultado = strinSplit.join('');
  return resultado;
}
console.log(encode('hi there'));

function decode(string) {
  // seu código aqui
  let parametro = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  strinSplit = string.split('')
  for (let index = 0; index < string.length; index += 1) {
    for (let key in parametro) {
      if (strinSplit[index] === key) {
        strinSplit[index] = parametro[key];
      }
    }
  }
  resultado = strinSplit.join('');
  return resultado;
}
console.log(decode('h3 th2r2'));


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
