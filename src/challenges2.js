// Desafio 10
function techList(array, name) {
  const result = []

  if (array.length == 0)
    return "Vazio!"

  array.sort()

  for (let value of array) {
    result.push({ tech: value, name: name })
  }

  return result
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
