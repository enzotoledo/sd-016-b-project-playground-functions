// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if (a==true && b==true) {
    return true
  } else {
    return false
  }
}

// Desafio 2

function calcArea(base,height) {
  // seu código aqui
  //let base = ;
  //let height = ;
  let area = (base * height)/2;
  return area ;
}
calcArea (10,50);
calcArea (5,2);
calcArea (51,1);

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let splitString = str.split(' ');
  return splitString
}

splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4
/* Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.
 */

function concatName(names) {
  for (let index in names) {
    let primeiroItem = names[0];
    let ultimoItem = names[names.length-1];
    let concatd = ultimoItem + ', ' + primeiroItem;
    return concatd
  } 
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);

//console.log (concatName)
 
// Desafio 5
function footballPoints(wins, ties) {
  points = ((wins*3) + (ties*1));
  return points
}
footballPoints(14,8);
footballPoints(1,2);
footballPoints(0,0);

// Desafio 6

function highestCount(numeros) {

  //let numeros = [9, 1, 2, 3, 9, 5, 7];
  let repeticoes = 0;
  let maiorNumero = 0;
  
  for (let index in numeros) {
      if (numeros[maiorNumero] < numeros[index]) {
          maiorNumero = index;
        }  
      }
  //console.log ('maior numero: '+numeros[maiorNumero]);
  
  for (let index in numeros) {
      if (numeros[maiorNumero] == numeros[index]) {
          repeticoes += 1;
        }
      } 
  //console.log ('repeticoes: '+repeticoes);
  return repeticoes;
  }
  
  highestCount([9, 1, 2, 3, 9, 5, 7]);
  highestCount([0, 4, 4, 4, 9, 2, 1]);
  highestCount([-2,-2,-1]);
  highestCount([0, 0, 0]);


// Desafio 7

/* Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato
Retorne a string 'cat1' caso a função catAndMouse receba os parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato
Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba os parâmetros onde os gatos estejam na mesma distância do rato */

function catAndMouse(mouse, cat1, cat2) {
	let end ='';
	if (Math.abs(cat1 - mouse) > (cat2 - mouse)) {
		end = 'cat2';
	} else if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
		end = 'cat1';
	} else {
		end =  "os gatos trombam e o rato foge"; 
	}
	console.log (end)
	return end;
}
catAndMouse(0,3,2);
catAndMouse(0,6,12);
catAndMouse(2,2);

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
