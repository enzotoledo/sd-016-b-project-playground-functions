// Desafio 1
function compareTrue(valor1, valor2 ) { 
  let resultado1
  if (valor1 === true && valor2 === true) {
    resultado1 = true;
    } else {
    resultado1 = false;
    }
    return resultado1;
    } 

// Desafio 2
function calcArea(base, height) {
  calcArea = (base*height)/2;
  return calcArea;
}

// Desafio 3
function splitSentence(name) {
  let resultado = name.split(" ");
  return resultado;
}

// Desafio 4
function concatName(nomes) {
  let ultimoItem = nomes[nomes.length - 1];
  let primeiroItem = nomes[0];
  let resultado  = ultimoItem + ", " + primeiroItem;
  return resultado;  
}

// Desafio 5
function footballPoints(wins, ties) {
   let vitoria = wins *3;
   let empate= ties *1;
   let resultado = vitoria + empate;
   return resultado;    
}

// Desafio 6
function highestCount(contagem) {
  let nMaior = Math.max.apply(null, contagem);
  let verificaRepeticao = 0;
  for ( let i=0; i < contagem.length; i++){
    if(nMaior === contagem[i]) { 
      verificaRepeticao++            
      }
  }
  return verificaRepeticao;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) { 
  
  let distanciacat1 = (cat1 - mouse) ;
  let distanciacat2 = (cat2 - mouse);
  let distancia2gatos= ((cat1 - cat2) * mouse);
  
  if(distancia2gatos === mouse ){return "os gatos trombam e o rato foge";}
  else if (distanciacat2 <  distanciacat1){return "cat1";}
  else if (distanciacat1 < distanciacat2){return "cat2";} 
  
}

// Desafio 8
function fizzBuzz(arrayOfNum){
  let fizzBuzzArray = arrayOfNum.map((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      return 'fizzBuzz';
    }
    if (element % 3 === 0) {
      return 'fizz'; 
    }
    if (element % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
  return fizzBuzzArray;
}
// Desafio 9
function encode(string) { 
  let array = string.split('');
for (let index = 0; index < array.length; index += 1) {
  if (array[index] === 'a') {
    array[index] = 1;
  } else if (array[index] === 'e') {
    array[index] = 2;
  } else if (array[index] === 'i') {
    array[index] = 3;
  } else if (array[index] === 'o') {
    array[index] = 4;
  } else if (array[index] === 'u') {
    array[index] = 5;
  }
}
return array.join('');
}
function decode(string){
  let decodeArray = string.split('');
  for (let index = 0; index < decodeArray.length; index += 1) {
    if (decodeArray[index] === '1') {
      decodeArray[index] = 'a';
    } else if (decodeArray[index] === '2') {
      decodeArray[index] = 'e';
    } else if (decodeArray[index] === '3') {
      decodeArray[index] = 'i';
    } else if (decodeArray[index] === '4') {
      decodeArray[index] = 'o';
    } else if (decodeArray[index] === '5') {
      decodeArray[index] = 'u';
    }
  }
  return decodeArray.join('');
}
console.log(decode('h3 th2r2!'));


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
  splitSentence,}