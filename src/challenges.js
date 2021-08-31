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
  let ordenar = vetorNumber.sort(); // ordena o vetor em ordem crescente
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
  let distanciaCat2 = Math.abs(mouse - cat2);
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
  let retorno ;
  let respostaArray = [];
  for (let index = 0; index < arryNumber.length ; index+=1 ){
    if(arryNumber[index] % 3 === 0 && arryNumber[index]%5 === 0){
      retorno = 'fizzBuzz';
      respostaArray.push(retorno);
    } else if(arryNumber[index] % 3 === 0){
      retorno = 'fizz';
      respostaArray.push(retorno);
    }else if(arryNumber[index] % 5 === 0){
      retorno = 'buzz';
      respostaArray.push(retorno);
    }else{
      retorno = 'bug!';
      respostaArray.push(retorno);
    }
  }
  return respostaArray;
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
