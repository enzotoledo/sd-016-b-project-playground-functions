// Desafio 1
function compareTrue(value1,value2) {
  if((value1 == true) && (value2 == true)){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,heigth) {
  return (base * heigth)/2;
}

// Desafio 3
function splitSentence(string) {
  let separa = string.split(" ");
  return separa
}

// Desafio 4
function concatName(name) {
  for(let i= 0 ; i < name.length; i+=1){
    let first = name[0];
    // length-1 name.length-1é o último índice da matriz name
    let last = name[name.length-1] + ", ";
    let firstLast = (last + first)
    console.log(firstLast)
    return firstLast

  }
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])


// Desafio 5
function footballPoints (wins,ties) {
let winsTies = (wins * 3) + ties;
console.log(winsTies);
return winsTies;

}
footballPoints(1,2)
// Desafio 6

function highestCount(numbers) {
  // -Infinity por causa dos negativos
  // -Infinity (o infinito negativo) é menor do que qualquer número finito.
  let highestNumber = -Infinity;
  let counter = 0;
    for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];  
   }
}
  for (j=0; j<numbers.length; j+= 1){
    if(numbers[j] === highestNumber){
      counter++
    }
  }
  console.log(counter);
  return counter;
}
highestCount([-2, -2, -1])


// Desafio 7
function catAndMouse (mouse,cat1,cat2) {
  // Match.abs porque a posição pode ser negativa e a função Match.abs, transforma em numeros absolutos
  let positionCat1 = Math.abs(mouse - cat1); 
  let positionCat2 = Math.abs(mouse - cat2);
  
  if (positionCat1 === positionCat2){
    return("os gatos trombam e o rato foge")
  }
  else if(positionCat1 < positionCat2){
    return("cat1") 
  }
  else{
    return("cat2")
  }
}
 
// Desafio 8
function fizzBuzz(numbers) {
  for(let i=0; i < numbers.length; i+= 1){
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0 ){
      numbers[i] = "fizzBuzz";
    } else if (numbers[i]  % 5 === 0 ){
      numbers[i] = "buzz";
    } else if (numbers[i]  % 3 === 0 ){
      numbers[i] = "fizz";
    } else {
      numbers[i] = "bug!";
    }
  }

console.log(numbers)
return numbers
}

fizzBuzz([2,15,7,9,45])

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
