// Desafio 10
let resTechList = [];
function techList(techNames, name) {
  if (techNames.length === 0) {
    resTechList = 'Vazio!';
  }
  for (let tech of techNames.sort()) {
    resTechList.push({
      tech,
      name,
    });
  }
  return resTechList;
}

// Desafio 11
generatePhoneNumber([3,2,3,5,3,7,4,8,0,5,2])
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11){
    arrayNumbers = 'Array com tamanho incorreto.';
  } else {
    let contador = 0;
    for (let index = 0; index < arrayNumbers.length; index += 1){
      let verifyNumber = arrayNumbers[index];
      if (verifyNumber < 0 || verifyNumber > 9 || contador >= 3) {
        arrayNumbers = 'não é possível gerar um número de telefone com esses valores'
        break;
      }
      contador = 0;
      for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1){
        if (verifyNumber === arrayNumbers[index2]) {
          contador += 1;
        }
      }
    }
  }
  return arrayNumbers;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleDone = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    triangleDone = true;
  }
  return triangleDone;
}

// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
