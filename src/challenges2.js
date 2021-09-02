// Desafio 10
function techList(tecnologias, nome) {
  if (tecnologias.length > 0) {
    let arrayRetorno = [];
    tecnologias = tecnologias.sort();
    for (let tec of tecnologias) {
      let objecto = { tech: tec, name: nome };
      arrayRetorno.push(objecto);
    }
    return arrayRetorno;
  }
  return 'Vazio!';
}

function verificarDuplicados(i, numero) {
  let cont = 0;
  if ((i > 9) || (i < 0)) {
    return 'fail';
  }
  for (let n of numero) {
    if (i === n) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 11
function generatePhoneNumber(numero) {
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i of numero) {
    if ((verificarDuplicados(i, numero) === 3) || (verificarDuplicados(i, numero) === 'fail')) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let ddd = `${numero[0]}${numero[1]}`;
  let num = `${numero[2]}${numero[3]}${numero[4]}${numero[5]}${numero[6]}`;
  let numcont = `${numero[7]}${numero[8]}${numero[9]}${numero[10]}`;
  return `(${ddd}) ${num}-${numcont}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let x = Math.abs(lineA - lineB);
  let y = Math.abs(x - lineC);
  let m = Math.max.apply(null, [lineA, lineB, lineC]);

  if (lineA < (lineB + lineC) && lineB < (lineC + lineA) && lineC < (lineB + lineA) && (m > y)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(bebidas) {
  let retorno = 0;
  let numb = bebidas.match(/\d/g);
  numb = numb.join('');
  for (let n of numb) {
    retorno += parseInt(n, 10);
  }
  if (retorno === 1) {
    return `${retorno} copo de água`;
  }
  return `${retorno} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
