// Desafio 10
function techList(textTen, myname) {
  let result = [];
  let lista = [];
  if (textTen.length > 0) {
    let ordemtextTen = textTen.sort();
    for (let objeto of ordemtextTen) {
      lista.push({ tech: objeto, name: myname });
    }
    result = lista;
  } else {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lnA, lnB, lnC) {
  let triangulo = false;
  let md = [Math.abs(lnA - lnB), Math.abs(lnA - lnC), Math.abs(lnC - lnB)];
  let sm = [lnA + lnB, lnA + lnC, lnC + lnB];
  if (lnA > md[2] && lnB > md[1] && lnC > md[0] && lnA < sm[2] && lnB < sm[1] && lnC < sm[0]) {
    triangulo = true;
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
