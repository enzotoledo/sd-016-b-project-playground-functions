// Desafio 1
function compareTrue(parametA, parametB) {
  if (parametA === true && parametB === true) {
  return true
  } else {
  return false
 }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(str) {
  let strToArr = str.split(' ')
  return strToArr
}

// Desafio 4
function concatName(arrToStr) {
  let firstName = arrToStr[0];
  let lastName = arrToStr[arrToStr.length - 1];
  let str = [lastName, firstName];
  return str.join(', ')
}

// Desafio 5
function footballPoints(wins, ties) {
  let jogosGanhos = wins * 3;
  let jogosEmpatados = ties;
  let pontos = jogosGanhos + jogosEmpatados;
  return pontos
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero  = arrayDeNumeros[0];
  let contadorNumero = 0;

  for (let index = 0; index < arrayDeNumeros.length; index +=1) {
    if (arrayDeNumeros[index] > maiorNumero) {
      maiorNumero = arrayDeNumeros[index];
    }
  }
  for (let index = 0; index < arrayDeNumeros.length; index +=1) {
    if (arrayDeNumeros[index] === maiorNumero) {
      contadorNumero += 1;
    }
  }
  return contadorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
  return 'cat1'
} else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
  return 'cat2'
} else {
  return 'os gatos trombam e o rato foge'
 }
}

//obs: desafio feito verificando dúvidas tiradas pelo Slack.

// Desafio 8
function fizzBuzz(array) {
  let retorno = []

  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] % 3 === 0 && array[contador] % 5 === 0) {
      retorno.push('fizzBuzz')
    } else if (array[contador] % 3 === 0)  {
     retorno.push('fizz')
    } else if (array[contador] % 5 === 0)  {
      retorno.push('buzz')
    } else {
      retorno.push('bug!')
    }
    }
    return retorno
  }

// Desafio 9
function encode(string) {
  let splitString = string.split('');
  
  for (let i in splitString) {
    if(splitString[i] === "a") {
      splitString[i] = 1;
    } else if (splitString[i] === "e") {
      splitString[i] = 2;
    } else if (splitString[i] === "i") {
      splitString[i] = 3;
    } else if (splitString[i] === "o") {
      splitString[i] = 4;
    } else if (splitString[i] === "u") {
      splitString[i] = 5;
    }
  }
  string = splitString.join('');
  return string;
}
console.log(encode('hi there'))

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
