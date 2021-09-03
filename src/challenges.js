// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(stringTrybe) {
  let resultado = stringTrybe.split(" ");
  return resultado;
}

// Desafio 4
function concatName(stringArrays) {
  let newArray = stringArrays[stringArrays.length - 1] + ', ' + stringArrays[0];
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points
}

// Desafio 6
function highestCount(numbers) {
let maiorNumero = numbers[0];
let contador = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] === maiorNumero) {
    contador += 1;
  }
}
return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs (mouse - cat1);
  let mouseCat2 = Math.abs (mouse - cat2);
  if (mouseCat1 > mouseCat2) {
    return "cat2";
  } else if (mouseCat1 < mouseCat2) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge"
  }
  }

// Desafio 8
function fizzBuzz(array) {
  for (i = 0; i < array.length; i += 1) {
    if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
      array[i] = "fizzBuzz";

    } else if (array[i] % 3 === 0) {
      array[i] = "fizz";

    } else if (array[i] % 5 === 0) {
      array[i] = "buzz";

    } else {
      array[i] = "bug!";
    }
    }
    return array;
    }

// Desafio 9

function encode (letterNumber) {
 let letterNumber = letterNumber.replace(/a/g, '1');
   letterNumber = letterNumber.replace(/e/g, '2');
   letterNumber = letterNumber.replace(/i/g, '3');
   letterNumber = letterNumber.replace(/o/g, '4');
   letterNumber = letterNumber.replace(/u/g, '5');

   return letterNumber;
}

function decode (numberLetter) {
  let numberLetter = numberLetter.replace(/1/g, 'a');
  numberLetter = numberLetter.replace(/2/g, 'e');
  numberLetter = numberLetter.replace(/3/g, 'i');
  numberLetter = numberLetter.replace(/4/g, 'o');
  numberLetter = numberLetter.replace(/5/g, 'u');

  return numberLetter;
}


  // Desafio 10

  function techList (list, name) {

    list = list.sort();
    let array = [];
    if (list.length === 0) {
      return "vazio!";
    }
    for (i = 0; i < list.length; i += 1) {
      let techName = {
        tech: list[i],
        name: name
      };
      array.push(techName);
    }
    return array;
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
