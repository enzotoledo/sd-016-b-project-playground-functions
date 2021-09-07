// Desafio 10
function techList(techs, nome) {
  if (techs.length === 0) {
    return 'Vazio!';
  }

  let tecnologias = [];
  techs = techs.sort();
  for (let tec of techs) {
    let objeto = {
      tech: tec,
      name: nome
    };
    tecnologias.push(objeto);
  }
  return tecnologias;

}

// Desafio 11
function generatePhoneNumber(celphone) {
 
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs((lineB - lineC))) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs((lineA - lineC))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(coposDeAgua) {
  let r = /\d+/g;
  let retorno = 0;
  let quantidadeDeAlcool = coposDeAgua.match(r);
  for (let i of quantidadeDeAlcool) {
    retorno = retorno + parseInt(i, 10);
  }
  if (retorno === 1) {
    return retorno + " copo de água";
  }
  return retorno + " copos de água";
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
