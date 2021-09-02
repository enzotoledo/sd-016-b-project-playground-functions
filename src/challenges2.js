// Desafio 10
function techList(tech, name) {
  let newArray = [];
  tech.sort();
  if (tech == '') {
    return 'Vazio!';
  } else {
    for (let index = 0; index < tech.length; index += 1) {
      let myList = new Object();
      myList.tech = tech[index];
      myList.name = name;
      newArray.push(myList);
    }
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
    let phoneNumber = [];
    if(array.length == 11) {
      for (let i = 0; i < 15; i += 1) {
        let repeticoes = 0;
        for (let x = 0; x < array.length; x += 1) {
          
          if(array[i] === array[x] ) {
            repeticoes += 1;
          }
        }
        if(array[i] <0 || array[i] >9 || repeticoes >= 3) {
          return "não é possível gerar um número de telefone com esses valores"
        } else {
        if(i == 0) {
          phoneNumber.push('(') 
          phoneNumber.push(array[i])
        }else if(i == 2) {
          phoneNumber.push(')')
          phoneNumber.push(' ')
          phoneNumber.push(array[i])

        }else if(i == 7) {
          phoneNumber.push('-')
          phoneNumber.push(array[i])
        } else {
          phoneNumber.push(array[i])
        }
      }
        }
    }else {
      return "Array com tamanho incorreto." 
    }
      return phoneNumber.join('');
    }
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ( lineA < (lineB+lineC) && lineA > Math.abs(lineB-lineC)) {
    return true;
  } else if(lineB < (lineA+lineC) && lineB > Math.abs(lineA-lineC)){
    return true;
  } else if(lineC < (lineA+lineB) && lineC > Math.abs(lineA-lineB)){
      return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  var numbers = string.match(/\d+/g).map(Number);
  soma = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i]
  }
  if (soma <= 1 ) {
    return soma + " copo de água";
  } else {
    return soma + " copos de água";

  }
}

console.log(hydrate('são 1 '));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
