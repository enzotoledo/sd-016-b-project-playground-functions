// Desafio 10
function techList(arrayString, name) {
  if(arrayString.length > 0){
    let arrayStringSorted = arrayString.sort();
    let result = [];
    for(i of arrayStringSorted){
      result.push({tech: i, name: name});
    }
    return result;
  }else{
    return 'Vazio!';
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
