// Desafio 10
function techList(arr, nm) {
  const techArray = arr.sort();
  const finalArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    finalArray.push({ tech: techArray[i], name: nm });
  }

  if (arr.length <= 0) {
    return 'Vazio!';
  }
  return finalArray;
}

// Desafio 11
function generatePhoneNumber(arr) {
  const phoneObj = {};
  let finalString = '';

  for (let i of arr) {
    phoneObj[i] = 0;
  }

  for (let n in arr) {
    switch (n) {
    case '0':
      finalString += '(' + arr[n];
      break;
    case '1':
      finalString += arr[n] + ')';
      break;
    case '2':
      finalString += ' ' + arr[n];
      break;
    case '6':
      finalString += arr[n] + '-';
      break;
    default:
      finalString += arr[n];
    }
  }

  if (arr.length !== 11) {
    finalString = 'Array com tamanho incorreto.';
  } else {
    arr.forEach((number) => {
      if (number < 0 || number > 9) {
        finalString = 'não é possível gerar um número de telefone com esses valores';
      }
    });
    arr.forEach((number) => {
      for (let key in phoneObj) {
        if (number.toString() === key) {
          phoneObj[key] += 1;
        }
      }
    });
  }

  for (let key in phoneObj) {
    if (phoneObj[key] >= 3) {
      finalString = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return finalString;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const sizeCheck1 = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  const sizeCheck2 = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);

  return sizeCheck1 && sizeCheck2;
}

// Desafio 13
function hydrate(str) {
  let cupsArray = str.split('');
  const t = [];
  let sum = 0;

  for (let i of cupsArray) {
    if (Number.parseInt(i)) {
      t.push(Number.parseInt(i));
    }
  }

  for (let n of t) {
    sum += n;
  }

  if (sum > 1) {
    return `${sum} copos de água`;
  } else {
    return `${sum} copo de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
