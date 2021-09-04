// Desafio 10
// Referência: Grupo de estudos com (Mariana Saraiva - Turma 16 - Tribo B).
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
// Referência: Grupo de estudos com (Luiz Wanderson - Turma 16 - Tribo B).
function triangleCheck(lineA, lineB, lineC) {
  let difference = Math.abs(lineA - lineB);
  let difference2 = Math.abs(difference - lineC);
  let maior = Math.max(lineA, lineB, lineC);

  if (lineA < (lineB + lineC) && (lineB < (lineA + lineC)) && (lineC < (lineA + lineB)) && (maior > difference2)) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));

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
