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

function catAndMouse(mouse, cat1, cat2) {
	let end ='';
	if (Math.abs(cat1 - mouse) > (cat2 - mouse)) {
		end = 'cat2';
	} else if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
		end = 'cat1';
	} else {
		end =  "os gatos trombam e o rato foge"; 
	}
	//console.log (end)
	return end;
}
catAndMouse(0,3,2);
catAndMouse(0,6,12);
catAndMouse(2,2);

// Desafio 8
/* Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:
Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].
O que será verificado:
Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para a função fizzBuzz
Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para a função fizzBuzz
Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para a função fizzBuzz */

/* for (let index in numeros) {
	if (numeros[maiorNumero] < numeros[index]) {
			maiorNumero = index;
		}  
	} */
function fizzBuzz(numeros) {
    let newArray = [];
    for (let index in numeros) {
        if ((numeros[index]%3===0) && (numeros[index]%5===0)) {
            string = 'fizzBuzz'
          } else if (numeros[index]%3===0)  {
            string = 'fizz'
          } else if (numeros[index]%5===0) {
            string = 'buzz';
          } else {
            string = 'bug!';
          }
          newArray.push(string);
          //console.log (newArray);
          //console.log (newArray.push(string));
        } 
   return newArray;
}
fizzBuzz([2, 15, 7, 9, 45]); 
fizzBuzz([7, 9]); 
fizzBuzz([9, 25]); 


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
