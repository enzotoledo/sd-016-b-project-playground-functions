// Desafio 10
function techList(arrayTecnologias, nome) { /* Para a resolucao desse exercicio utilizei a ajuda do aluno : victor shin kamiguchi */
  let tecnologiasAAprender = [];
  if (arrayTecnologias.length > 0) {
    arrayTecnologias.sort();
    for (let index of arrayTecnologias) {
      tecnologiasAAprender.push({
        tech: index,
        name: nome,
      });
    }
    return tecnologiasAAprender;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  let contadorNumerosRepetidos = 0;
  let numeroAtual = arrayNumeros[0];
  let numeroTelefone = '';
  if (arrayNumeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    for (let indexNumero = 0; indexNumero < arrayNumeros.length; indexNumero += 1) {
      numeroAtual = arrayNumeros[index];
      /* verifica se o numero repete 3 vezes */
      if (arrayNumeros[indexNumero] === numeroAtual) {
        contadorNumerosRepetidos += 1;
        if (contadorNumerosRepetidos === 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      } else if (arrayNumeros[indexNumero] < 0 || arrayNumeros[indexNumero] > 9) { /* Verifica se e menor que 0 ou maior que 9 */
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    contadorNumerosRepetidos = 0;
  }
  numeroTelefone = `(${arrayNumeros[0]}${arrayNumeros[1]}) ${arrayNumeros[2]}${arrayNumeros[3]}${arrayNumeros[4]}${arrayNumeros[5]}${arrayNumeros[6]}-${arrayNumeros[7]}${arrayNumeros[8]}${arrayNumeros[9]}${arrayNumeros[10]}`;
  return numeroTelefone;
}

// Desafio 12
function eMenor(a, b, c) { /* Para a resolucao desse exercicio utilizei a ajuda do aluno : victor shin kamiguchi */
  let exp = [
    (a + b) > c,
    ((b + c) > a),
    ((a + c) > b),
  ];
  if (exp[0] === true && exp[1] === true && exp[2] === true) {
    return true;
  }
  return false;
}

function eMaior(a, b, c) {
  let exp = [
    (Math.abs(a - b) < c),
    (Math.abs(b - c) < a),
    (Math.abs(a - c) < b),
  ];
  if (exp[0] === true && exp[1] === true && exp[2] === true) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let a = lineA;
  let b = lineB;
  let c = lineC;

  if (eMenor(a, b, c) === false || eMaior(a, b, c) === false) {
    return false;
  }
  return true;
}
// Desafio 13
function hydrate(str) {
  let bebidasArray = str.split('');
  let number = [];
  let sum = 0;

  for (let index of bebidasArray) {
    if (Number.parseInt(index, 10)) {
      number.push(Number.parseInt(index, 10));
    }
  }

  for (let n of number) {
    sum += n;
  }

  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
