// Desafio 10
function techList(techArray, name) {
  return (techArray.length === 0)
    ? 'Vazio!'
    : techArray.sort().map(function (tech) { return { tech, name }; });
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
