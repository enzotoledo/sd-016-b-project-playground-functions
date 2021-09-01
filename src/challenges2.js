// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  for (let i of array) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
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
