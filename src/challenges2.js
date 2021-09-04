// Desafio 10
function techList(array, nome) {
  // seu código aqui
  array.sort();
  let techs = [];
  if (array.length === 0) {
    return "Vazio!";
  }
  // for pra fazer entra em todo array
  for (let value of array) {
    techs.push({tech: value, name: nome});
  }
  return techs;
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Gustavo')

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
