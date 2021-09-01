// Desafio 10
function techList(technologies,person) {
    let techSort = technologies.sort();
    let techGroup = [];
    
    for(let index = 0; index < technologies.length; index += 1){
      techGroup.push({ tech: techSort[index], name: person })
    }
    
    if(technologies.length <= 0){
      return "Vazio!"
    }
    
      return techGroup
    
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
