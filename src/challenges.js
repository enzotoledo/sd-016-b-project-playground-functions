// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSep = frase.split(' ');
  return fraseSep;
}

// Desafio 4
function concatName(nomes) {
  let lastPos = nomes.length - 1;
  let last = nomes[lastPos];
  let first = nomes[0];
  let junto = '';
  return junto.concat(last, ', ', first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let contBigger = 0;
  let biggerNum = numeros[0];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > biggerNum) {
      contBigger = 0;
      biggerNum = numeros[index];
    }
    if (numeros[index] === biggerNum) {
      contBigger += 1;
    }
  }
  return contBigger;
}

// Função de cálculo da distância entre o gato e o rato
// Suporte Desafio 7
function casasCat(mouse, cat) {
  let casasGato = 0;
  for (let casasMiau = cat; casasMiau !== mouse;) {
    if (cat < mouse) {
      casasMiau += 1;
      casasGato += 1;
    } else if (cat > mouse) {
      casasMiau -= 1;
      casasGato += 1;
    }
  }
  return casasGato;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let contGato1 = casasCat(mouse, cat1);
  let contGato2 = casasCat(mouse, cat2);
  if (contGato1 < contGato2) {
    return 'cat1';
  } if (contGato2 < contGato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Função de atribuição de palavra a depender do número
// Suporte Desafio 8
function oneOrAnother(elemento) {
  if (elemento % 3 === 0 && elemento % 5 === 0) {
    return ('fizzBuzz');
  } if (elemento % 3 === 0) {
    return ('fizz');
  } if (elemento % 5 === 0) {
    return ('buzz');
  }
  return ('bug!');
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    let palavra = oneOrAnother(array[index]);
    resultado.push(palavra);
  }
  return resultado;
}

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
