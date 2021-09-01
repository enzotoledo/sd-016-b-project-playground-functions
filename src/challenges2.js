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

function validarArray(arr) {
  if (arr.length !== 11) {
    return true;
  }
}

function numberPhone(phone) {
  let numero = '';
  for (let index in phone) {
    if (index === '0') {
      numero = '(' + phone[index];
    } else if (index === '1') {
      numero += '' + phone[index] + ') ';
    } else if (index > '1' && index < '7') {
      numero += '' + phone[index];
    } else if (index === '7') {
      numero += '-' + phone[index];
    } else if (index > '7') {
      numero += '' + phone[index];
    }
  }
  return numero;
}

function validNumbers(n){
  let valorFinal = verificador(n);
  for (let index in n) {
    if (n[index] < 0 || n[index] > 9 || valorFinal >= 3) {
      return true;
    }
  }
}

function generatePhoneNumber(array) {
  let validarNumero = validNumbers(array);
  let validar = validarArray(array);
  let numero = numberPhone(array);

  if (validar === true) {
    return 'Array com tamanho incorreto.';
  }
  if(validarNumero === true){
      return 'não é possível gerar um número de telefone com esses valores';
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
