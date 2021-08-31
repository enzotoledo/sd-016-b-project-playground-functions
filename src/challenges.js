// Desafio 1
function compareTrue(a,b) {
  if(a == true && b == true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let areaTriangulo=(base * height) / 2.
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  /* usei como referencia a formula contida nesse site https://www.horadecodar.com.br/2020/04/06/javascript-transformar-string-em-array/ */
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let strigDoArray;
  let ultimoElementoDoArray= array.length-1
  for (let index = 0; index < array.length; index+=1) {
    if(array.length < 1){
      strigDoArray =`${array[0]}`;
    }
    else{
      strigDoArray = `${array[ultimoElementoDoArray]}, ${array[0]}`
    }  
  }
  return strigDoArray;
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontosWins;
  let pontosTies;
  let totalDePontos = pontosWins + pontosTies;
  if (wins >= 1 && ties >= 1){
    pontosWins = wins * 3;
    pontosTies = ties;
    return totalDePontos = pontosWins + pontosTies
  }
  else{
    totalDePontos = 0;
    return totalDePontos;
  }
}

// Desafio 6
function highestCount() {
 
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
 
}

// Desafio 8
function fizzBuzz(params) {
  let arrayNomes=[];
  for (let index = 0; index < params.length; index+=1) {
      if(params[index]%3 == 0 && params[index]%5 == 0){
          arrayNomes.push("fizzBuzz");          
      }
      else if(params[index]%5 == 0 && params[index]%3 !== 0 ){
          arrayNomes.push("buzz");
      }
      else if(params[index]%3 == 0 && params[index]%5 !== 0 ){
          arrayNomes.push("fizz");
      }
      else if(params[index]%3 !== 0 && params[index]%5 !== 0){
          arrayNomes.push("bug!");
      }
  }
  return arrayNomes;
}

// Desafio 9
function encode(param) {
  let codifica=[];
  for (let index = 0; index < param.length; index+=1) {
   if(param[index] === "a"){
        codifica.push("1");
    }
    else if(param[index] === "e"){
        codifica.push("2");
    }
    else if(param[index] === "i"){
        codifica.push("3");
    }
    else if(param[index] === "o"){
        codifica.push("4");
    }
    else if(param[index] === "u"){
        codifica.push("5");
    }
    else{
        codifica.push(param[index]);
    }
  }
  
      return codifica.join("")
}
function decode(param) {
  let decodifica=[];
  for (let index = 0; index < param.length; index+=1) {
      if(param[index] === "1"){
          decodifica.push("a");
      }
      else if(param[index] === "2"){
          decodifica.push("e");
      }
      else if(param[index] === "3"){
          decodifica.push("i");
      }
      else if(param[index] === "4"){
          decodifica.push("o");
      }
      else if(param[index] === "5"){
          decodifica.push("u");
      }
      else{
          decodifica.push(param[index]);
      }
  }
  return decodifica.join("")
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
