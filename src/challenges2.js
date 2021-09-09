// Desafio 10
function techList(array, name) {
  let arraySort = array.sort();
  let newArray = [];
  let objectList = {};

  for (let index = 0; index < array.length; index += 1) {
    objectList.tech = arraySort[index];
    objectList.name = name;
    newArray.push(objectList);
    objectList = {};
  }
  if (newArray.length === 0) {
    newArray = 'Vazio!';
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber() {
// seu código aqui
}

// Desafio 12
// Consultei este tutorial e artigo para aprender sobre math.
// https://www.youtube.com/watch?v=8xqU_hXb-9k&ab_channel=GustavoNeitzke
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  let sum = lineA + lineB;
  let sub = Math.abs(lineA - lineB);

  if (sum > lineC && sub < lineC) {
    return true;
  }
  return false;
}

// Desafio 13
// Consultei este tutorial para retirar numero de uma string : https://www.youtube.com/watch?v=pfkkdzeyx6U&ab_channel=AllThingsJavaScript%2CLLC
// consultei este tutorial para aprender sobre o .map https://www.youtube.com/watch?v=G3BS3sh3D8Q&ab_channel=ProgrammingwithMosh
function hydrate(string) {
  let water = 0;
  let stringNumbers = string.match(/\d+/g).map(Number);
  for (let number of stringNumbers) {
    water += number;
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
