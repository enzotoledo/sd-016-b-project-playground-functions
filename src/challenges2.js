// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let array = [];
  let novoObjeto = {}
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    tech.sort();
    for (let index in tech) {
      novoObjeto = {
        tech: tech[index],
        name: name,
      };
      array.push(novoObjeto);
    }
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(array) {
  let numero = '';
  let contador = 0;
  let valorFinal = 0;
  for (let teste in array) {
    for (let teste2 in array) {
      if (array[teste] === array[teste2]) {
        contador += 1;
      }
    }
    if (valorFinal < contador) {
      valorFinal = contador;
    }
    contador = 0;
  }
if (array.length === 11) {
  for (let index in array) {
    if (array[index] < 0 || array[index] > 9 || valorFinal >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
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
  if(lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)){
    return true;
  } else{
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let code = /\d+/g;
  let valorFinal = 0;
  let copos = string.match(code);
  for(let index in copos){
    valorFinal += parseInt(copos[index]);
  }
  if(valorFinal > 1){
    return valorFinal + ' copos de água';
  } else{
    return valorFinal + ' copo de água'
  }
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
