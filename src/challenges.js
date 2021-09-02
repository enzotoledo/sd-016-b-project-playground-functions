function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }else{
  return false;}
}

// Desafio 2
function calcArea(base, height){
  let area = (base * height) / 2
  return area;
}
// Desafio 3
function splitSentence(strPart) {
  let strTam = strPart.length;
  let strlast = strPart.length - 1;
  let strRetorno = [];
  let strTemp = "";

  for(let count = 0; count < strTam; count++){
      if(strPart[count] !== " ") {
          strTemp += strPart[count];
          if(count == strlast){
              strRetorno.push(strTemp);
          }
      }else{
          strRetorno.push(strTemp);
          strTemp = "";
      }
  }return strRetorno;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let primeiroele = array.shift();
  let ultimoele = array.pop();
  let elementos = ultimoele.concat(', ', primeiroele);
  return elementos;n
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;

}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {v
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
