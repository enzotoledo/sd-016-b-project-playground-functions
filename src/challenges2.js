// Desafio 10

function techList (tech, name) {
  let result ;
  tech.sort();
  
    if (tech.length === 0) { 
      return 'Vazio!'
    } else {
      let techObject_0 = {
          name: name,
          tech: tech[0]
      }
      let techObject_1 = {
          name: name,
          tech: tech[1]
      }
      let techObject_2 = {
          name: name,
          tech: tech[2]
      }
      let techObject_3 = {
          name: name,
          tech: tech[3]
      }
      let techObject_4 = {
          name: name,
          tech: tech[4]
      }
    return [techObject_0, techObject_1, techObject_2,techObject_3, techObject_4];
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
