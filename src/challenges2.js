// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let arrayOrdenada = tech.sort();
  let array = [];

  if (arrayOrdenada.length === 0) {
    return 'Vazio!';
  } else if (arrayOrdenada.length > 0) {
    for(let index in arrayOrdenada) {
      array.push({
        tech: arrayOrdenada[index],
        name: name,
      })
    }
  }
  return array;
}
console.log(techList(
  ["React", "Jest", "HTML", "CSS", "JavaScript"],
  "Lucas"));


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
