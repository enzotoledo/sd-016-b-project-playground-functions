// Desafio 1
function compareTrue(value1,value2) {
  if ((value1 == true) && (value2 == true)){
    return true;
  }else{
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {
 let area = (base*height)/2;

 return area;
}

// Desafio 3
function splitSentence(frase) {
  let separa = frase.split(" ");
 
  return separa;
}

//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(vetor) {
  let primeiroItem = vetor[0];
  let ultimoItem = vetor[vetor.length -1];

  let resultadoConcat = (ultimoItem+", "+primeiroItem);
  
  return resultadoConcat;
}

//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins*3) + (ties*1);
  return total;
}

// Desafio 6
function highestCount(vetorNumber) {
  let ordenar = vetorNumber.sort(function(a,b) { return a - b; }); // ordena o vetor em ordem crescente
  let maiorNumero = ordenar[vetorNumber.length -1];
  let qtdRepete = 0;

  for(let cont = 0; cont < vetorNumber.length; cont+=1) {
    if (vetorNumber[cont] === maiorNumero) {
      qtdRepete+=1;
    }
  }
  return qtdRepete;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1); // abs deixa o número absoluto
  let distanciaCat2 = Math.abs(mouse - cat2); // Busquei informação do Math.abs no 
  let resultado;

  if(distanciaCat1 > distanciaCat2) {
    resultado = 'cat2';
  } else if(distanciaCat1 < distanciaCat2) {
    resultado ='cat1';
  }else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(arryNumber) {

  let respostaArray = [];

  for (let index = 0; index < arryNumber.length ; index+=1 ) {
    if(arryNumber[index] % 3 === 0 && arryNumber[index]%5 === 0) {
      respostaArray.push('fizzBuzz');
    } 
    else if(arryNumber[index] % 3 === 0){
      respostaArray.push('fizz');
    }
    else if(arryNumber[index] % 5 === 0){
      respostaArray.push('buzz');
    }
    else{
      respostaArray.push('bug!');
    }
  }
  return respostaArray;
}

// Desafio 9
function encode(vogais) {
  let vogalSeparada = vogais.split("");

  for(let value in vogalSeparada){
      if(vogalSeparada[value] === 'a'){
        vogalSeparada[value] ='1';

      } if(vogalSeparada[value] === 'e'){
        vogalSeparada[value] ='2';

      } if(vogalSeparada[value] === 'i'){
        vogalSeparada[value] ='3';

      } if(vogalSeparada[value] === 'o'){
        vogalSeparada[value] ='4';

      } if(vogalSeparada[value] === 'u'){
        vogalSeparada[value] ='5';
      }
 }
    return vogalSeparada.join("");
}
//console.log(encode("hi there"));

function decode(vogais) {
  let vogalSeparada = vogais.split("");

  for(let value in vogalSeparada){
      if(vogalSeparada[value] === '1'){
        vogalSeparada[value] ='a';

      } if(vogalSeparada[value] === '2'){
        vogalSeparada[value] ='e';

      } if(vogalSeparada[value] === '3'){
        vogalSeparada[value] ='i';

      } if(vogalSeparada[value] === '4'){
        vogalSeparada[value] ='o';

      } if(vogalSeparada[value] === '5'){
        vogalSeparada[value] ='u';
      }
 }
    return vogalSeparada.join("");

}

//Desafio 10

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
