// Desafio 10
function techList(list, name) {
  
    list = list.sort();
    let array = [];
    if (list.length === 0) {
      return "vazio!";
    }
    for (i = 0; i < list.length; i += 1) {
      let techName = {
        tech: list[i],
        name: name
      };
      array.push(techName);
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
