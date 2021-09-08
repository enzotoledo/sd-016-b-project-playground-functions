// Desafio 10
function techList(technology, name) {
  technology = technology.sort();
  let techObject = {};
  let techFinal = [];
  for (let index = 0; index < technology.length; index += 1) {
    techObject.tech = technology[index];
    techObject.name = name;
    techFinal.push(techObject);
    techObject = {};
  }
  if (techFinal.length <= 0) {
    techFinal = 'Vazio!';
  }
  return techFinal;
}

// Desafio 11
function generatePhoneNumber(number) {
  function mostAppears(numbers) {
    let accountant = 0;
    let accountantTotal = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[i] === numbers[index]) {
          accountant += 1;
        }
      }
      if (accountant >= 3) {
        accountantTotal = 'não é possível gerar um número de telefone com esses valores';
      }
      accountant = 0;
    }
    return accountantTotal;
  }
  let notPhoneNumber = 0;
  let phoneNumber = [];
  let phoneNumbers;
  if (number.length === 11) {
    for (let index = 0; index < number.length; index += 1) {
      if (number[index] < 0 || number[index] > 9 || mostAppears(number) !== 0) {
        notPhoneNumber = 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    notPhoneNumber = 'Array com tamanho incorreto.';
  }
  for (let index1 = 0; index1 < number.length; index1 += 1) {
    if (phoneNumber.length === 0) {
      phoneNumber.push('(');
    }
    if (phoneNumber.length === 3) {
      phoneNumber.push(')');
    }
    if (phoneNumber.length === 4) {
      phoneNumber.push(' ');
    }
    if (phoneNumber.length === 10) {
      phoneNumber.push('-');
    }
    phoneNumber.push(number[index1]);
  }
  phoneNumbers = phoneNumber.join('');
  if (notPhoneNumber !== 0) {
    phoneNumbers = notPhoneNumber;
  }
  return phoneNumbers;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absValueAB = Math.abs(lineA - lineB);
  let absValueBC = Math.abs(lineB - lineC);
  let absValueAC = Math.abs(lineC - lineA);
  let isTriangle = false;
  if (lineC < (lineA + lineB) && lineB < (lineA + lineC) && lineA < (lineC + lineB) && lineC > absValueAB && lineB > absValueAC && lineA > absValueBC) {
    isTriangle = true;   
  }
  return isTriangle;
}

// Desafio 13
function hydrate(drinks) {
  let numberDrinks = drinks.match(/\d+/g).map(Number); // função .match tirada o stackOverflow nao entendi direito como funciona
  let count = 0;
  let waterString = ' copos de água';
  let returnString;
  for (let index = 0; index < numberDrinks.length; index += 1) {
    if (numberDrinks[index] > 0) {
      count += numberDrinks[index];
    }
  }
  if (count === 1) {
    waterString = (' copo de água');
  }
  returnString = count + waterString;
  return returnString;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
