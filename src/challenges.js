// Desafio 1
function compareTrue(num1,num2) {
  

  if (num1 === true && num2 === true) {
    return true;
  } else {
    return false;
  }
   
}
console.log(compareTrue(true, true));
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  // seu código 
  
  let area = (base * height) / 2 ; 
  return (area);
}

console.log(calcArea(10,50));
console.log(calcArea(5,2));
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(setence) {
 // seu código aqui

result = setence.split(' ');
return result;

}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));




// Desafio 4
function concatName(splitName) {

  let result = splitName[splitName.length-1] + ', ' + splitName[0];
  return result

}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(win, tie) {
  // seu código aqui
  let result = win * 3 + tie;
  return result;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
 function highestCount(arrayA) {
  // seu código aqui

  let objectA = {};
  let arrayB = [];
  let numeroMaior = '';
  let quantNumeroMaior = 0;

  for (index =0; index < arrayA.length; index++) {
    objectA[arrayA[index]] = arrayA[index];
  }

  for (let key in objectA) {
    arrayB.push(key);
  }

  for (index2 = 0; index2 < arrayB.length; index2++) {
    if(numeroMaior == '') {
      numeroMaior = arrayB[index2]
    }
    if( numeroMaior < parseInt(arrayB[index2])) {
      numeroMaior = arrayB[index2];
    } else {
      numeroMaior = numeroMaior;
      }
    
  }

  for (index3 = 0; index3 < arrayA.length; index3++) {
    if (numeroMaior === (arrayA[index3].toString())) {
      quantNumeroMaior = quantNumeroMaior + 1;
    } else {
      quantNumeroMaior = quantNumeroMaior
    }
  }

return quantNumeroMaior;


 }

 console.log(highestCount([-2, -2, -1]));
 console.log(highestCount([0, 0, 0]));
 console.log(highestCount([9,1,2,3,9,5,7]));
 
 
// Desafio 7
function catAndMouse() {
  // seu código aqui
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
