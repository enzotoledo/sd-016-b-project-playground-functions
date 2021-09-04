// Desafio 10
function techList(techs, theName) {
  let techSort = techs.sort();
  let listTechs = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techs.length; index += 1) {
    listTechs.push({ tech: techSort[index], name: theName });
  }
  return listTechs; 
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Hugo'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  let A = Math.abs(lineA - lineB);
  let B = Math.abs(lineB - lineC);
  let C = Math.abs(lineC - lineA);
  // eslint-disable-next-line sonarjs/prefer-single-boolean-return
  // eslint-disable-next-line no-undef
  if ((B < lineA && lineA < (lineB + lineC)) && (C < lineB && lineB < (lineC + lineA)) && (A < lineC && lineC < (lineA + lineB))) {
    return true;
  } return false;
}
console.log(triangleCheck(1, 1, 9));
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
