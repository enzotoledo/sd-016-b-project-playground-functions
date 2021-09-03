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
function encode(letterNumber) {
  let result = '';
  for (i = 0; i < letterNumber.length; i += 1) {
    if (letterNumber[i] === "a") {
      result += "1";

    } else if (letterNumber[i] === "e") {
      result += "2";

    } else if (letterNumber[i] === "i") {
      result += "3";

    } else if (letterNumber[i] === "o") {
      result += "4";

    } else if (letterNumber[i] === "u") {
      result += "5";

    } else {
      result += letterNumber[i];
    }
}
return result;
}


function decode(numberLetter) {
  let result = '';
  for (i = 0; i < letterNumber.length; i += 1) {
    if (letterNumber[i] === "1") {
      result += "a";

    } else if (letterNumber[i] === "2") {
      result += "e";

    } else if (letterNumber[i] === "3") {
      result += "i";

    } else if (letterNumber[i] === "4") {
      result += "o";

    } else if (letterNumber[i] === "5") {
      result += "u";

    } else {
      result += letterNumber[i];
    }
}
return result;
}

  // Desafio 10

  function techList (array, name) {
    let sortedArray = array.sort();
    let returnArray = [];
    let result;
    
    for (let i = 0; i < sortedArray.length; i += 1) {
      returnArray.push (
        {
          tech: sortedArray[i],
          name: name,
        }
      );
    }

    if (returnArray.length === 0) {
      result = "vazio!";

    } else {
      result = sortedArray;
    }
    return result;
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
