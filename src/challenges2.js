// Desafio 10
function techList(array, name) {
  let objeto = {};
  if (array === []) {
    return 'Vazio!';
  }
  let newArray = array.sort();
  for (let i = 0; i < array.length; i += 1) {
    objeto[i] = { 'tech': newArray[i], 'name': name };
  }
  return Object.getOwnPropertyNames(objeto);
}

// Desafio 11
function generatePhoneNumber(array) {
  let number = [];
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    number.push(array[i]);
  }
  return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
