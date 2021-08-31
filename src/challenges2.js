// Desafio 10
function techList(tech, name) {
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    tech = tech.sort();
    for (let position in tech) {
      result[position] = {
        tech: tech[position],
        name: name,
      }
    }
    return result;
  }
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
