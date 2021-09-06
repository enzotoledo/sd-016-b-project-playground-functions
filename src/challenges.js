// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 == true) && (value2 == true))
    return true; {
    return false
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) /2)
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");
  return resultado
} 


// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length-1];
  let final = lastItem + ", " + firstItem;
  return final;
}
  
  
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = ((wins * 3) + ties)
  return pontos
}

  console.log(footballPoints(14, 8));


// Desafio 6
function highestCount(list) {

  let maiorNumero = Math.max(...list);
  let count = 0;
for (let index = 0; index < list.length; index+=1) {
    if (maiorNumero === list[index]){
        count += 1;
    }
}

return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {


  let distanCat1Mouse = mouse - cat1 
  let distanCat2Mouse = mouse - cat2
  
  if (Math.abs(distanCat1Mouse) > Math.abs(distanCat2Mouse)){
    return "cat2"
  } if (Math.abs(distanCat2Mouse) > Math.abs(distanCat1Mouse)){
    return "cat1"
  } if (Math.abs(distanCat1Mouse) === Math.abs(distanCat2Mouse)){
    return 'os gatos trombam e o rato foge'
  }
  }


// Desafio 8
function fizzBuzz(arrayDeNumero) {
  
  let resultado = [];
  
  for (let index = 0; index < arrayDeNumero.length; index+=1) {
    let div5 = arrayDeNumero[index] % 5;
    let div3 = arrayDeNumero[index] % 3;
    let div3e5 = arrayDeNumero[index] % 15;

    if (div3e5 === 0){
      resultado.push('fizzBuzz');
    } else if (div5 === 0){
      resultado.push('buzz');
    } else if (div3 === 0){
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado
}

// Desafio 9
function encode(string) {

  string = string.replace(/a/g, "1");
  string = string.replace(/e/g, "2");
  string = string.replace(/i/g, "3");
  string = string.replace(/o/g, "4");
  string = string.replace(/u/g, "5");
 
  return string;
  
 }

function decode(string){
     
  string = string.replace(/1/g, "a");
  string = string.replace(/2/g, "e");
  string = string.replace(/3/g, "i");
  string = string.replace(/4/g, "o");
  string = string.replace(/5/g, "u");
 
  return string;
  
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
