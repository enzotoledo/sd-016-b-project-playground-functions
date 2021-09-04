// Desafio 10
function techList(tech, name) {
let arrayTech = tech.sort();
let result = [];
for (let index = 0; index < arrayTech.length; index += 1) {
    result.push({
      tech: arrayTech[index],
      name: name
  });
}
if (tech.length === 0) {
  result = "Vazio!";
}
return result;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
