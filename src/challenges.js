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
function fizzBuzz(){
  let newArray = [];
array.forEach((value) => {
if (value % 3 === 0 && value % 5 === 0) {
newArray.push('fizzBuzz');
} else if (value % 3 === 0) {
newArray.push('fizz');
} else if (value % 5 === 0) {
newArray.push('buzz');
} else {
newArray.push('bug!');
}
});
return newArray;
} 

// Desafio 9
function encode() {
  let numeros = encode.replace ("hi, there!", "h3, th2r2!");
  console.log (numeros);
  }
function decode() {
  let minusculas = decode.replace ("h3, th2r2!","hi, there!" );
  console.log (minusculas);
  
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
}