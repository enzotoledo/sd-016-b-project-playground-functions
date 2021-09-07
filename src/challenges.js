function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }else{
  return false;}
}

// Desafio 2
function calcArea(base, height){
  let area = (base * height) / 2
  return area;
}
// Desafio 3
function splitSentence(strPart) {
  let strTam = strPart.length;
  let strlast = strPart.length - 1;
  let strRetorno = [];
  let strTemp = "";

  for(let count = 0; count < strTam; count++){
      if(strPart[count] !== " ") {
          strTemp += strPart[count];
          if(count == strlast){
              strRetorno.push(strTemp);
          }
      }else{
          strRetorno.push(strTemp);
          strTemp = "";
      }
  }return strRetorno;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let primeiroele = array.shift();
  let ultimoele = array.pop();
  let elementos = ultimoele.concat(', ', primeiroele);
  return elementos;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

function highestCount(Arrayn) {
  let biggestNumber = Arrayn[0];
  for (let index = 1; index < Arrayn.length; index += 1) {
    if (Arrayn[index] > biggestNumber) {
      biggestNumber = Arrayn[index];
    }
  }
  let numberoftimes = 0;
  for (let index2 = 0; index2 < Arrayn.length; index2 += 1) {
    if (Arrayn[index2] === biggestNumber) {
      numberoftimes += 1;
    }
  }
  return numberoftimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((cat1 - mouse)) > Math.abs((cat2 - mouse))) {
    return 'cat2';
  }
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}


// Desafio 8
function fizzBuzz(ArrayN) {
  let newarray = [];
  for (let index = 0; index < ArrayN.length; index += 1) {
    if (ArrayN[index] % 3 === 0 && ArrayN[index] % 5 === 0) {
      newarray.push("fizzBuzz");
    } else if (ArrayN[index] % 3 === 0) {
      newarray.push("fizz");
    } else if (ArrayN[index] % 5 === 0) {
      newarray.push("buzz");
    } else {
      newarray.push("bug!");
    }
  }
  return newarray;
}

// Desafio 9
function encode(Vowels) {
  Vowels = Vowels.replace(/a/g, '1');
  Vowels = Vowels.replace(/e/g, '2');
  Vowels = Vowels.replace(/i/g, '3');
  Vowels = Vowels.replace(/o/g, '4');
  Vowels = Vowels.replace(/u/g, '5');
  return Vowels;
}

function decode(Vowelsdecode) {
  Vowelsdecode = Vowelsdecode.replace(/1/g, 'a');
  Vowelsdecode = Vowelsdecode.replace(/2/g, 'e');
  Vowelsdecode = Vowelsdecode.replace(/3/g, 'i');
  Vowelsdecode = Vowelsdecode.replace(/4/g, 'o');
  Vowelsdecode = Vowelsdecode.replace(/5/g, 'u');
  return Vowelsdecode;
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
