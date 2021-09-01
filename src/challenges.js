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

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui
}
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
