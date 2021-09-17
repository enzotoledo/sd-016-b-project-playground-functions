// Desafio 10
function techList(Technology, name) {
  // seu código aqui
  let objectList = [];
  if (Technology.length !== 0) {
    for (let i = 0; i < Technology.length; i += 1) {
      let object = {};
      object.tech = Technology.sort()[i];
      object.name = name;
      objectList.push(object);
    }
    return objectList;
  }
  return 'Vazio!';
}
// --------------------------------------------------------------------------------------------------
// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let counter = 0;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] == array[j]) {
        counter += 1;
      }
      if (counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    counter = 0;
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${array.slice(0,2).join("")}) ${array.slice(2,7).join("")}-${array.slice(7,11).join("")}`;
}
// --------------------------------------------------------------------------------------------------
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else {
    return false;
  }
}
// --------------------------------------------------------------------------------------------------
// Desafio 13
function hydrate(string) {
  // seu código aqui
  let pedido = string.match(/\d+/g);
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
