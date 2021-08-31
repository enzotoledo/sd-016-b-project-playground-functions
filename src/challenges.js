// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura)/2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  divisor = frase.split(' ');
  return divisor;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let newArray = [];
  newArray.push(array[0]);
  newArray.push(array[array.length -1]);
  newArray = newArray.reverse().join(', ');
  return newArray;
} 

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let valor = 0;
  if(wins === 0 && ties === 0){
    return valor;
  } else{
    valor = (wins * 3) + (ties);
    return valor;
  }
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
    let contador = 0;
    let valorFinal = '';
    let maiorNumero = -10;
    for (let index in array) {
      for (let index2 in array) {
        if (array[index] === array[index2]) {
          contador += 1;
          if(maiorNumero <= array[index]){
            maiorNumero = array[index];
          }
        }
      }
      if (maiorNumero <= array[index]) {
        valorFinal = array[index];
        contador = 0;
      }
    }
    contador = 0;
    for(let index3 in array){
      if(valorFinal === array[index3]){
        contador = contador + 1;
      }
    }
        return contador;
      }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 > mouse && cat2 > mouse){
    if(cat2 - mouse > cat1 - mouse){
      return 'cat1';
    } else if(cat2 - mouse < cat1 - mouse){
      return 'cat2';
    } else if (cat2 - mouse === cat1 - mouse) {
      return 'os gatos trombam e o rato foge';
    }
} else if(cat1 < mouse && cat2 > mouse){
  if(cat2 - mouse > mouse - cat1){
    return 'cat1';
  } else if(cat2 - mouse < mouse - cat1){
    return 'cat2';
  } else if (cat2 - mouse === mouse - cat1) {
    return 'os gatos trombam e o rato foge';
  }
} else if (cat1 > mouse && cat2 < mouse){
  if( mouse - cat2 > cat1 - mouse){
    return 'cat1';
  } else if(mouse - mouse < cat1 - mouse){
    return 'cat2';
  } else if (mouse - cat2 === cat1 - mouse) {
    return 'os gatos trombam e o rato foge';
  }
} else if( cat1 < mouse && cat2 < mouse){
  if(mouse - cat2 > mouse - cat1){
    return 'cat1';
  } else if(mouse - cat2 < mouse - cat1){
    return 'cat2';
  } else if (mouse - cat2 === mouse - cat1) {
    return 'os gatos trombam e o rato foge';
  }
}

} console.log(catAndMouse(10,3,2));

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  newArray = [];
  for(let index in array){
    if(array[index] % 3 === 0 && array[index] % 5 === 0){
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0){
      newArray.push('fizz');
    } else if (array[index] % 5 === 0){
      newArray.push('buzz');
    } else {
      newArray.push('bug!')
    }
  }
  return newArray;
} console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
