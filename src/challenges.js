// Desafio 1
function compareTrue(value1,value2) {
  if((value1 === true)&&(value2 === true)){
   return true;
  }else{
   return false;
  } 
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" "); 
}

// Desafio 4
function concatName(strings) {
  let vetor = [];
  for(let i = 0 ; i < strings.length ; i++){
    if(i == 0){
      vetor.push(strings[0]);
    }else if(i == strings.length-1){
      vetor.push(strings[strings.length-1]);
    }
  }

  return vetor[1] + ", " + vetor[0];
  
}

// Desafio 5
function footballPoints(wins,ties) {
  let point = wins*3;
  point = point + ties;
  return point;
}

// Desafio 6
function highestCount(numeros) {
  let maior = 0;
  let count = 0;

  for(let i = 0 ; i < numeros.length ; i++){
    if(numeros[i] > maior){
      maior = numeros[i];
    }
  }

  for(let i = 0 ; i < numeros.length ; i++){
    if(numeros[i] === maior){
      count++;
    }
  }
  if(count == 0){
    count = 1;
  }  
  return count;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if((mouse+cat1+cat2)/3 == 1){
    return "os gatos trombam e o rato foge";
  }else if(cat1 > cat2){
    return "cat2";
  }else if(cat1 < cat2){
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(vetor) {
  let vetorResposta = [];

  for(let i = 0 ; i < vetor.length ; i++){
    if((vetor[i]%3 == 0) && (vetor[i]%5 == 0)){
      vetorResposta.push("fizzBuzz");
      console.log(vetorResposta[i]);
    }else if((vetor[i]%3 == 0)){
      vetorResposta.push("fizz");
    }else if((vetor[i]%5 == 0)){
      vetorResposta.push("buzz");
    }else {
      vetorResposta.push("bug!");
    }
    return vetorResposta
  }


  
}

// Desafio 9
function encode(string) {

  let vetor = [];
  let frase;
  vetor = string.split("");
  console.log(vetor);

  for(let i = 0 ; i < vetor.length ; i++){

    if(vetor[i] == "a"){
        vetor[i] = "1";
    }else if(vetor[i] == "e"){
        vetor[i] = "2";
    }else if(vetor[i] == "i"){
        vetor[i] = "3";
    }else if(vetor[i] == "o"){
        vetor[i] = "4";
    }else if(vetor[i] == "u"){
        vetor[i] = "5";
    }  
    
  }
  
  frase = vetor.join('');

  return frase;

}
function decode(string) {

  let vetor = [];
  let frase;
  vetor = string.split("");
  console.log(vetor);

  for(let i = 0 ; i < vetor.length ; i++){

    if(vetor[i] == "1"){
        vetor[i] = "a";
    }else if(vetor[i] == "2"){
        vetor[i] = "e";
    }else if(vetor[i] == "3"){
        vetor[i] = "i";
    }else if(vetor[i] == "4"){
        vetor[i] = "o";
    }else if(vetor[i] == "5"){
        vetor[i] = "u";
    }  
    
  }
  
  frase = vetor.join('');

  return frase;
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
