// Desafio 10
function techList(technology, name) {
  technology = technology.sort()
  let techObject = {    
  }
  let techFinal = [];    
  for (let index1 = 0; index < technology.length; index++) {
    techObject['tech'] = technology[index];    
    techObject['name'] = name;
    techFinal.push(techObject);
    techObject = {};    
  }
  if (techFinal.length <= 0){
    techFinal = 'Vazio!';
  }
  return techFinal;
}

// Desafio 11
function generatePhoneNumber(number) { 
function mostAppears(numbers) {
    let accountant = 0;
    let accountantTotal = 0;
    

    for (let i = 0; i < numbers.length; i += 1){
        for (let index = 0; index < numbers.length; index++) {
            if(numbers[i] === numbers[index]){
                accountant = accountant + 1;                   
            }                       
        }
        if(accountant >= 3){
          accountantTotal = "não é possível gerar um número de telefone com esses valores";
            
        }  
        accountant = 0;
    }    
    return accountantTotal
}
  let notPhoneNumber = 0;
  let phoneNumber = [];
  let phoneNumbers;  
  if(number.length === 11){
    for(let index = 0; index < number.length; index ++){            
      if(number[index] < 0 || number[index] > 9 || mostAppears(number) !== 0){
        notPhoneNumber = "não é possível gerar um número de telefone com esses valores";
      }
    }
  } else {
    notPhoneNumber = 'Array com tamanho incorreto.';
  }
  for (let index1 = 0; index1 < number.length; index1++) {
    if (phoneNumber.length == 0){
      phoneNumber.push('(')
    }
    if (phoneNumber.length == 3){
      phoneNumber.push(')')
    }
    if (phoneNumber.length == 4){
      phoneNumber.push(' ')
    }
    if (phoneNumber.length == 10){
      phoneNumber.push('-')
    }
    phoneNumber.push(number[index1])
  }
  phoneNumbers = phoneNumber.join('')
  if(notPhoneNumber !== 0){
    phoneNumbers = notPhoneNumber
  }
  
  return phoneNumbers;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));




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
