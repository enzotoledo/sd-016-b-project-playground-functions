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
function triangleCheck() {
  // seu código aqui
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
