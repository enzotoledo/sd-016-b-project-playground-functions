// Desafio 10
function techList(arrayT,name) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
/* usei a formula da existencia de um triangulo desse site https://mundoeducacao.uol.com.br/matematica/condicao-existencia-um-triangulo.htm */
function triangleCheck(lineA,lineB,lineC) {
  if (lineB -lineC < lineA && lineA < lineB + lineC){
    return true
}
else{
    return false
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
