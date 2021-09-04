// Desafio 10
function techList(tech, nm) {
  // seu código aqui
  let array = [];
  let novoObjeto = {};
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  for (let index of tech) {
    novoObjeto = {
      tech: index,
      name: nm,
    };
    array.push(novoObjeto);
  }
  return array;
}

// Desafio 11
function verificador(seRepete) {
  let contador = 0;
  let valorFinal = 0;
  seRepete.forEach((num) => {
    for (let num2 of seRepete) {
      if (num === num2) {
        contador += 1;
      }
    }
    if (valorFinal < contador) {
      valorFinal = contador;
    }
    contador = 0;
  });
  return valorFinal;
}

function validarArray(arr) {
  if (arr.length !== 11) {
    return true;
  }
}

function numberPhone(phone) {
  let numero = '';
  let paranteses = '(';
  let outroparenteses = ') ';
  let menos = '-';
  let ddd = '';
  let numero2 = '';
  let final = '';
  phone.forEach((value, index) => {
    if (index < 2) {
      ddd += value;
    } else if (index >= 2 && index < 7) {
      numero += value;
    } else if (index >= 7) {
      numero2 += value;
    }
  });
  final = paranteses + ddd + outroparenteses + numero + menos + numero2;
  return final;
}

function validNumbers(n) {
  let valorFinal = verificador(n); // ajuda do Gabriel Silvestre Turma-16-B para entender o por que puxar o (n) ao invés do (array);
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
  if (validarNumero === true) {
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
  for (let index of valor) {
    valorFinal += parseInt(index, 10);
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
