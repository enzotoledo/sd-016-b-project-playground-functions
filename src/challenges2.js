// Desafio 10
function techList(tech, name) {
  let newArray = [];
  tech.sort();
  if (tech == '') {
    return 'Vazio!';
  } else {
    for (let index = 0; index < tech.length; index += 1) {
      let myList = new Object();
      myList.tech = tech[index];
      myList.name = name;
      newArray.push(myList);
    }
    return newArray;
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
