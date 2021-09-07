// Desafio 1
function compareTrue(valor1, valor2) {
  let sim = true;
  let nao = false;
  if (valor1 === true && valor2 === true) {
    return sim;
  }
  return nao;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let stringSeparada = [];
  stringSeparada = frase.split(' ');
  return stringSeparada;
}

// Desafio 4
function concatName(meuArray) {
  let resulltado;
  let ultimoItem;
  let primeiroItem;
  ultimoItem = meuArray[meuArray.length - 1];
  primeiroItem = meuArray.shift();
  resulltado = `${ultimoItem}, ${primeiroItem}`;
  return resulltado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao;
  let pontuacaoVitorias = wins * 3;
  let pontuacaoEmpates = ties;
  pontuacao = pontuacaoVitorias + pontuacaoEmpates;
  return pontuacao;
}

// Desafio 6
function highestCount(numerosArray) {
  let maior = numerosArray[0];
  let quntidade = 0;
  for (let key in numerosArray) {
    if (numerosArray[key] > maior) {
      maior = numerosArray[key];
    }
  }
  for (let key in numerosArray) {
    if (numerosArray[key] === maior) {
      quntidade += 1;
    }
  }
  return quntidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = mouse - cat1;
  let distanciaGato2 = cat2 - mouse;
  let resulltado;
  if (cat1 > mouse) {
    distanciaGato1 = cat1 - mouse;
  }
  if (cat2 < mouse) {
    distanciaGato2 = mouse - cat2;
  }
  if (distanciaGato1 < distanciaGato2) {
    resulltado = 'cat1';
  } else if (distanciaGato1 > distanciaGato2) {
    resulltado = 'cat2';
  } else if (distanciaGato1 === distanciaGato2) {
    resulltado = 'os gatos trombam e o rato foge';
  }
  return resulltado;
}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numerosArray) {
  let fizz = 'fizz';
  let buzz = 'buzz';
  let fizzBuzzz = 'fizzBuzz';
  let bug = 'bug!';
  let resulltado = [];
  for (let key in numerosArray) {
    if (numerosArray[key] % 3 === 0) {
      resulltado[key] = fizz;
      if (numerosArray[key] % 5 === 0) {
        resulltado[key] = fizzBuzzz;
      }
    } else if (numerosArray[key] % 5 === 0) {
      resulltado[key] = buzz;
    } else {
      resulltado[key] = bug;
    }
  }
  return resulltado;
}

// Desafio 9
function encode(fraseInformada) {
  let fraseModificada = fraseInformada;
  for (let index = 0; index < fraseModificada.length; index += 1) {
    if (fraseModificada[index] === 'a') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 1);
    } else if (fraseModificada[index] === 'e') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 2);
    } else if (fraseModificada[index] === 'i') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 3);
    } else if (fraseModificada[index] === 'o') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 4);
    } else if (fraseModificada[index] === 'u') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 5);
    }
  }
  return fraseModificada;
}

function decode(fraseInformada) {
  let fraseModificada = fraseInformada;
  for (let index = 0; index < fraseModificada.length; index += 1) {
    if (fraseModificada[index] === '1') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 'a');
    } else if (fraseModificada[index] === '2') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 'e');
    } else if (fraseModificada[index] === '3') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 'i');
    } else if (fraseModificada[index] === '4') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 'o');
    } else if (fraseModificada[index] === '5') {
      fraseModificada = fraseModificada.replace(fraseInformada[index], 'u');
    }
  }
  return fraseModificada;ui
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
