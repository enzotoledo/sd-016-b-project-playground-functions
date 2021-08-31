// Desafio 10
function techList(textTen, myname) {
  if (textTen.length > 0) {
    let ordemtextTen = textTen.sort();
    let lista = [];
    for (let objeto of ordemtextTen) {
      lista.push({tech: objeto, name: myname})
    }
    return lista;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let modAB = Math.abs(lineA-lineB);
  let modAC = Math.abs(lineA-lineC);
  let modCB = Math.abs(lineC-lineB);
  let somAB = lineA + lineB;
  let somAC = lineA + lineC;
  let somCB = lineC + lineB;
  let triangulo = false;
  if (lineA > modCB && lineB > modAC && lineC > modAB){
    if (lineA < somCB && lineB < somAC && lineC < somAB){
      triangulo = true;
    }
  }
  return triangulo;
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
