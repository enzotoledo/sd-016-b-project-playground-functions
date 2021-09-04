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
/* Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".
*/
function encode(str) {
  let newArray = [];
  let splitString = str.split(""); 
    for (let index in splitString) {
        if (splitString[index]==='a') {
            splitString[index]=1;
        } else if (splitString[index]==='e'){
            splitString[index]=2;
        } else if (splitString[index]==='i') {
            splitString[index]=3;
        } else if (splitString[index]==='o') {
            splitString[index]=4;
        } else if (splitString[index]==='u') {
            splitString[index]=5;
        } else {
        }
    newArray.push(splitString[index]);
    }  
    let joinArray = newArray.join(""); 
    return joinArray;
}
encode ("hi there!")

function decode(str) {
  let newArray = [];
  let splitString = str.split(""); 
    for (let index in splitString) {
        if (splitString[index]==='1') {
            splitString[index]='a';
        } else if (splitString[index]==='2'){
            splitString[index]='e';
        } else if (splitString[index]==='3') {
            splitString[index]='i';
        } else if (splitString[index]==='4') {
            splitString[index]='o';
        } else if (splitString[index]==='5') {
            splitString[index]='u';
        } else {
        }
    newArray.push(splitString[index]);
    }  
    let joinArray = newArray.join(""); 
    return joinArray;
}
decode ('h3 th2r2!')

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
