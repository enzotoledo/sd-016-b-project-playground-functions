// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 == true) && (param2 == true))
    return true
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split('')
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;

}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6 (Feito com a ajuda do pessoal da mentoria  ; ))
function highestCount(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  let contadorNumero = 0;

  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] > maiorNumero) {
      maiorNumero = arrayDeNumeros[index];
    }
  }
  for (let index = 0; index < arrayDeNumeros.leght; index += 1) {
    if (arrayDeNumeros[index] === maiorNumero) {
      contadorNumero += 1;
    }
  }
  return
}


// Desafio 7 (Math.abs recomendado pelo pessoal no slack <3)
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
