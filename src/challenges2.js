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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
