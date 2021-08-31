// Desafio 1
function compareTrue(x1, x2) {
  if(x1 == true && x2 == true) {
     return true;
  } else {
     return false;
  }         
}

console.log(false, true);

// Desafio 2
function calcArea(base, heigth) {
  const area = (base * heigth)/2;
  
  return area;
}

console.log(calcArea(51, 1))

// Desafio 3
function splitSentence(office) {
  let officeWork = office.split(" ", 2);
  return officeWork; 
}

console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  const nameList = [ ]
  let names = nameList.push(array[array.length -1], array[0]);
  let nameConcat = nameList.join(", ");
  return nameConcat
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  //let somaPoints =  ;  
}

// Desafio 6
function highestCount(repeatMax) {
  let maior = 0
  let repeat = 0
  for (let index = 0; index <= repeatMax.length; index += 1)
    if (maior < repeatMax[index]){
        maior = repeatMax[index]
    }
    
    for(let index in repeatMax){
      if(maior === repeatMax[index]){
        repeat += 1
      }
    } 
   
    return repeat
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

//[9, 1, 2, 3, 9, 5, 7]

 /*for(let index = 0; index <= repeatMax.length; index += 1){
      if(repeatMax[index] === maior){
        repeat += 1
        }
    } 
    return repeat*/


      


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
