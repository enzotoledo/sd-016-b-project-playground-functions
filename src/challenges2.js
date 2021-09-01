// Desafio 10
function techList(tech, name) {

  const objectsList = [];

  if (tech.length === 0) {
        return 'Vazio!';
 } 
  tech.sort();
  
  for (let index = 0; index < tech.length; index += 1) {
    objectsList.push({tech:tech[index], name: name})
  }
  return objectsList
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
