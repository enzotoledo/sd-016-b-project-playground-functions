function generatePhoneNumber(phoneNumber) {
  let phonePattern = '';

  if (phoneNumber.length !== 11) {
    phonePattern = 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let counter = 0;
    for (let indexSecondLoop = 0; indexSecondLoop < phoneNumber.length; index += 1) {
      counter = 1;
      if (phoneNumber[index] === phoneNumber[indexSecondLoop]) {
        counter += 1;
      }
      if (counter >= 3 || phoneNumber[index] > 9 || phoneNumber[index] < 0) {
        phonePattern = 'não é possível gerar um número de telefone com esses valores';
      } else {
        phonePattern = `(${phoneNumber.slice(0, 3)} 
        ${phoneNumber.slice(3, 8)}-${phoneNumber.slice(8, 12)})`}
    }
  }
  return phonePattern;
} 

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));