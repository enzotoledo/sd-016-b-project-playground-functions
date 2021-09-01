// Desafio 10
function techList(arrayTech, name) {
  let arrayTech2 = [];
  if (arrayTech.length > 0) {
    arrayTech.sort();
    for (let index of arrayTech) {
      arrayTech2.push({
        tech: index,
        name: name
      });
    }
    console.log(arrayTech2);
    return arrayTech2;
  }
  return 'Vazio!';
}

function restriction21(newZ) {
  newZ.sort();
  let arrayCount = [];
  let count = 1;
  for (let i = 0; i < newZ.length; i += 1) {
    let nextNum = newZ[i + 1];
    if (newZ[i] === nextNum) {
      count += 1;
    } else { arrayCount.push(count); count = 1; }
  }
  arrayCount.sort();
  arrayCount.reverse();
  return arrayCount;
}

function restriction2(z) {
  let newZ = Array.from(z);
  let arrayCount = restriction21(newZ);
  if (arrayCount[0] > 2) {
    return false;
  }
  return true;
}

function restriction1(z) {
  for (let i = 0; i < z.length; i += 1) {
    let actNumber = z[i];
    if (actNumber > 9 || actNumber < 0) {
      return false;
    }
  }
  return true;
}

// Desafio 11
function generatePhoneNumber(z) {
  let str1 = '';
  if (z.length !== 11) {
    str1 = 'Array com tamanho incorreto.';
  } else if (restriction2(z) === false || restriction1(z) === false) {
    str1 = 'não é possível gerar um número de telefone com esses valores';
  } else {
    str1 = `(${z[0]}${z[1]}) ${z[2]}${z[3]}${z[4]}${z[5]}${z[6]}-${z[7]}${z[8]}${z[9]}${z[10]}`;
  }
  return str1;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
