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
function createTheNumber(array) {
  let numeroTelefone = '';
  let prefixo = `(${array[0]}${array[1]})`;
  let fist = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  let second = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  numeroTelefone = `${prefixo} ${fist}-${second}`;
  return numeroTelefone;
}

function generatePhoneNumber(array) {
  let contadorNumerosRepetidos = 0;
  let numeroAtual = array[0];
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    for (let indexNumero = 0; indexNumero < array.length; indexNumero += 1) {
      numeroAtual = array[index];
      /* verifica se o numero repete 3 vezes */
      if (array[indexNumero] === numeroAtual) {
        contadorNumerosRepetidos += 1;
        if (contadorNumerosRepetidos === 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      } else if (array[indexNumero] < 0 || array[indexNumero] > 9) { /* Verifica se e menor que 0 ou maior que 9 */
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    contadorNumerosRepetidos = 0;
  }
  let numeroTelefone = createTheNumber(array);
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
