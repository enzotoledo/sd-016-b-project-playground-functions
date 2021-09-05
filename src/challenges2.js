// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber (numbersList) {
  let numbersRepeat= 0
  if (numbersList.length !== 11) {
    return "Array com tamanho incorreto."
  };
  for(let i = 0 ; i < numbersList.length ; i += 1) {
    if ((numbersList[i] < 0) || (numbersList [i] > 9)){
      return "não é possível gerar um número de telefone com esses valores"
    }
    numbersRepeat= 0
    for(let index of numbersList) {
      if (index === i) {
        numbersRepeat += 1;
      }
      if (numbersRepeat >= 3 ) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
return ("(" + numbersList[0] + numbersList [1] + ") " + numbersList [2] + numbersList [3] + numbersList [4] + numbersList [5] + numbersList [6] + "-" + numbersList [7] + numbersList [8] + numbersList [9] + numbersList [10])
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
let checkTriangle = false
let checklineA = false
let checklineB = false
let checklineC = false

if (lineA > ( lineB - lineC ) && lineA < (lineB + lineC)){
  checklineA = true
}

if (lineB > ( lineA - lineC ) && lineB < (lineA + lineC)) {
  checklineB = true
}

if (lineC > ( lineA - lineB ) && lineC < (lineA + lineB)) {
  checklineC = true
}

if (checklineA === true && checklineB === true && checklineC === true) {
  checkTriangle = true
}
return checkTriangle
};

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
