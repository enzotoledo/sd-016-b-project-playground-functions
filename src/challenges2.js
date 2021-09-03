// Desafio 10
function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }

  let resultArray = [];
  techArray.sort();
  for (let techName of techArray) {
    let resultObject = {
      tech: techName,
      name: `${name}`,
    };
    resultArray.push(resultObject);
  }
  return resultArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  }
  return result;
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
