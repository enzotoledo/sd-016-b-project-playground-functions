// Desafio 10
function techList(arrey, name) {
  let object = {};
  let list = [];
  for (let tech of arrey.sort()) {
    object.tech = tech;
    object.name = name;
    list.push(object);
  }
  if (list.length === 0) {
    return 'Vazio!';
  } else {
    return list;
  }
}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Rafael');
// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA + lineB > lineC) && (lineB + lineC > lineA) && (lineA + lineC > lineB) && (lineA > Math.abs(lineB) - Math.abs(lineC)) && (lineB > Math.abs(lineA) - Math.abs(lineC)) && (lineC > Math.abs(lineB) - Math.abs(lineA))) {
    return true;
  } else {
    return false;
  }
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
