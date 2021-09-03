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
//function triangleCheck(lineA, lineB, lineC) {
//  let lineACheck = (lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC));
//  let lineBCheck = (lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC));
//  let lineCCheck = (lineC < (lineB + lineA)) && (lineC > Math.abs(lineB - lineA));

//  return lineACheck && lineBCheck && lineCCheck; (forma mais legivel porem não passa no lint :((( )


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
