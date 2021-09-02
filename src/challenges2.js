// Desafio 10
function techList(arrey, name) {
  let object = {};
  let list = [];
  if (arrey.length === 0) {
    return 'Vazio!';
  } else if (arrey.length > 0) {
    for (let tech of arrey.sort()) {
      object = {
        tech: tech,
        name: name
      } 
      list.push(object);
    }
  }
  return list;
}

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
function hydrate(drinks) {

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
