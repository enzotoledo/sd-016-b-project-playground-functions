// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let array = [];
  let novoObjeto = {};
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  for (let index in tech) {
    novoObjeto = {
      tech: tech[index],
      name: name,
    };
    array.push(novoObjeto);
  }
return array;
}

// Desafio 11
function verificador(seRepete) {
  let contador = 0;
  let valorFinal = 0;
  for (let teste in seRepete) {
    for (let teste2 in seRepete) {
      if (seRepete[teste] === seRepete[teste2]) {
        contador += 1;
      }
    }
    if (valorFinal < contador) {
      valorFinal = contador;
    }
    contador = 0;
  }
  return valorFinal;
}

function generatePhoneNumber(array) {
  let numero = '';
  let valorFinal = verificador(array);
  if (array.length === 11) {
    for (let index in array) {
      if (array[index] < 0 || array[index] > 9 || valorFinal >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (index === '0') {
        numero = '(' + array[index];
      } else if (index === '1') {
        numero += '' + array[index] + ') ';
      } else if (index > '1' && index < '7') {
        numero += '' + array[index];
      } else if (index === '7') {
        numero += '-' + array[index];
      } else if (index > '7') {
        numero += '' + array[index];
      }
    }
  } else {
    return 'Array com tamanho incorreto.';
  }
  return numero;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let copo = ' copo de água';
  let copos = ' copos de água';
  let code = /\d+/g;
  let valorFinal = 0;
  let valor = string.match(code);
  for (let index in valor) {
    valorFinal += parseInt(valor[index]);
  }
  if (valorFinal > 1) {
    return valorFinal + copos;
  }
  return valorFinal + copo;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
