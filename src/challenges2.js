// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let array = [];
  let novoObjeto = {}
  if(tech.length === 0){
    return 'Vazio!';
  } else{  
    tech.sort();
    for(let index in tech){
      novoObjeto = {
        tech: tech[index],
        name: name,
      };
      array.push(novoObjeto);
  }
}
  return array;
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
