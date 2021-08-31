// Desafio 1
function compareTrue(valorA, valorB) {
  if ((valorA && valorB)) {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence(frase) {
  let fraseDividida = frase.split(' ');
  return fraseDividida;
}

// Desafio 4
function concatName(array) {
  let ultimaPalavra = array[array.length - 1];
  let primeiraPalavra = array[0];
  let fraseConcatenada = `${ultimaPalavra}, ${primeiraPalavra}`;
  return fraseConcatenada;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  for (let i = 0; i < wins; i += 1) {
    pontos += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    pontos += 1;
  }

  return pontos;
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maiorNumero = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0;
  let distanciaCat2 = 0;
  let posicaoMouse = mouse;
  if ((cat1 !== posicaoMouse)) { /*  calcula distancia do gato 1 */
    distanciaCat1 = posicaoMouse - cat1;
  }
  if ((cat2 !== posicaoMouse)) { /*  calcula distancia do gato 2 */
    distanciaCat2 = posicaoMouse - cat2;
  }
  let valorGato1ABS = Math.abs(distanciaCat1);
  let valorGato2ABS = Math.abs(distanciaCat2);
  if (valorGato1ABS === valorGato2ABS) { /*  verifica qual esta mais distante e retorna o resultado  */
    return 'os gatos trombam e o rato foge';
  } if (valorGato1ABS < valorGato2ABS) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3) === 0 && (array[index] % 5) === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if ((array[index] % 3) === 0) {
      arrayFizzBuzz.push('fizz');
    } else if ((array[index] % 5) === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(frase) {
  let novaSting = '';
  let letrasTrocadas = { a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 };
  for (let i = 0; i < frase.length; i += 1) {
    let letraAtual = frase[i];
    for (let key in letrasTrocadas) {
      if (key === letraAtual) {
        let novoNumero = letrasTrocadas[key];
        letraAtual = novoNumero;
        break;
      }
    }
    novaSting += letraAtual;
  }
  return novaSting;
}

function decode(frase) {
  let novaSting = '';
  let letrasTrocadas = { a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 };
  for (let i = 0; i < frase.length; i += 1) {
    let letraAtual = frase[i];
    for (let key in letrasTrocadas) {
      if (letrasTrocadas[key] == letraAtual) {
        let novaLetra = key;
        letraAtual = novaLetra;
        break;
      }
    }
    novaSting += letraAtual;
  }
  return novaSting;
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
