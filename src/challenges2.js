// Desafio 10
function techList(arr, nome) {
  let object = {};
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      object.tech = arr[j];
      object.name = nome;
    }
  }
  return object;
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
