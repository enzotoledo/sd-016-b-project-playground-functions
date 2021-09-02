// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 === true) && (valor2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calcularTriangulo = (base * height) / 2;
  return calcularTriangulo;
}

// Desafio 3
function splitSentence(palavra) {
  let resultado = palavra.split(' ', 10);
  return resultado;
}

// Desafio 4
function concatName(nomesArray) {
  let stringDeRetorno = `${nomesArray[nomesArray.length - 1]}, ${nomesArray[0]}`;
  return stringDeRetorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  return vitorias + ties;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = Math.max.apply(null, arrayDeNumeros);
  let numerosRepetidos = 0;

  for (let contar of arrayDeNumeros) {
    if (contar === maiorNumero) {
      numerosRepetidos += 1;
    }
  }
  return numerosRepetidos;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

function verificarDivisor(cont) {
  if ((cont % 3) === 0 && (cont % 5) === 0) {
    return 'fizzBuzz';
  }
  if ((cont % 3) === 0) {
    return 'fizz';
  }
  if ((cont % 5) === 0) {
    return 'buzz';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let arrayRetorno = [];
  for (let cont of numbers) {
    switch (verificarDivisor(cont)) {
    case 'fizz':
      arrayRetorno.push('fizz');
      break;
    case 'fizzBuzz':
      arrayRetorno.push('fizzBuzz');
      break;
    case 'buzz':
      arrayRetorno.push('buzz');
      break;
    default:
      arrayRetorno.push('bug!');
      break;
    }
  }
  return arrayRetorno;
}

// Desafio 9
function encode(texto) {
  texto = texto.replace(/[a]/g, '1');
  texto = texto.replace(/[e]/g, '2');
  texto = texto.replace(/[i]/g, '3');
  texto = texto.replace(/[o]/g, '4');
  texto = texto.replace(/[u]/g, '5');
  return texto;
}

function decode(texto) {
  texto = texto.replace(/[1]/g, 'a');
  texto = texto.replace(/[2]/g, 'e');
  texto = texto.replace(/[3]/g, 'i');
  texto = texto.replace(/[4]/g, 'o');
  texto = texto.replace(/[5]/g, 'u');
  return texto;
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
