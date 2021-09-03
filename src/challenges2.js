function techList(tec2, name) {
  if( tec2.length === 0 ) {
    return 'Vazio!';
  }
  
  tec2.sort();
  let list = [];

  for ( i = 0; i < tec2.length; i++) {
    list[i] = {
      tech : tec2[i],
      name: name,
    };
  }
  return list;
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
