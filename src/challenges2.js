// Desafio 10
function techList(array, nome) {
  et newList = [];
let newObjeto;
array = array.sort();

for (let key in array) {
newObjeto = {
tech: array[key],
name: nome
};
newList[key] = newObjeto;
}
return newList;
} 


// Desafio 11
function generatePhoneNumber() {
  
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
