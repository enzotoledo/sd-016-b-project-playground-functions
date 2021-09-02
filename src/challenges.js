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

// Função de troca de caracteres da frase pelos respectivos números
function charsTrade(chars) {
  const equal = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  if (chars in equal) return equal[chars];
  return chars;
}

// Função de identificar caracteres a serem substituídos
function trade(splitedWord) {
  let na = [];
  for (let i = 0; i < splitedWord.length; i += 1) {
    na.push(charsTrade(splitedWord[i]));
  }
  return na;
}

// Desafio 9 - codificação
function encode(palavra) {
  let palavraSplit = palavra.split('');
  let codWord = trade(palavraSplit);
  let palavraJoined = codWord.join('');
  return palavraJoined;
}

// Decodificação
function decode(cod) {
  let splitedWord = cod.split('');
  let uncodWord = trade(splitedWord);
  let newWordJoined = uncodWord.join('');
  return newWordJoined;
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
