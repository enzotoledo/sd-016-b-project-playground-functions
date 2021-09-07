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
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    arrayNumbers = 'Array com tamanho incorreto.';
  } else {
    let contador = 0;
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      let verifyNumber = arrayNumbers[index];
      if (verifyNumber < 0 || verifyNumber > 9 || contador >= 3) {
        arrayNumbers = 'não é possível gerar um número de telefone com esses valores';
        break;
      }
      contador = 0;
      for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
        if (verifyNumber === arrayNumbers[index2]) {
          contador += 1;
        }
      }
    }
  }
  if (typeof arrayNumbers !== 'string') {
    let phoneNumber = '';
    let ddd = [];
    let numberChunk2 = [];
    let numberChunk1 = [];
    for (let index = 0; index < 2; index += 1) {
      ddd.push(arrayNumbers[index]);
    }
    for (let index = 2; index < 7; index += 1) {
      numberChunk1.push(arrayNumbers[index]);
    }
    for (let index = 7; index < 11; index += 1) {
      numberChunk2.push(arrayNumbers[index]);
    }
    phoneNumber = `(${ddd.join('')}) ${numberChunk1.join('')}-${numberChunk2.join('')}`;
    arrayNumbers = phoneNumber;
    return arrayNumbers;
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
function hydrate(bebidas) {
  let countBebidas = /\d+/g;
  let copoDagua = bebidas.match(countBebidas);
  if (copoDagua.length > 1) {
    let sum = 0;
    for (let index = 0; index < copoDagua.length; index += 1) {
      let count = parseInt(copoDagua[index], 10);
      sum += count;
    }
    bebidas = `${sum} copos de água`;
  } else {
    bebidas = `${parseInt(copoDagua, 10)} copo de água`;
  }
  return bebidas;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
