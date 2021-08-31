// Desafio 10
function techList(array, name) {
  let obj = [];
  let arrayOrganized = array.sort();

  for(let index of arrayOrganized){
    obj.push({
      tech: `${index}`,
      name: `${name}`
    });
  }

  if(arrayOrganized.length < 1){
    return 'Vazio!';
  }
  return obj;
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
