function generatePhoneNumber(numberArray) {
    let count = [];
    let result = '(';
    if(numberArray.length !== 11){
        return ('Array com tamanho incorreto.')
    } else {
        for (let index of numberArray) {
            if ((index <0) || (index >9)) {
                return ('não é possível gerar um número de telefone com esses valores');
            } else {
                for (let i of numberArray) {
                    if (numberArray[index] == numberArray[i]) {
                        count ++;
                        if (count >= 3) {
                            return ('não é possível gerar um número de telefone com esses valores');
                        }
                    }
                }
            }
        }
    }
    for(i=0;i<2;i+=1){
        result += numberArray[i];
      }
      result += ') ';
      for(i=2;i<7;i+=1){
        result += numberArray[i];
      }
      result += '-';
      for(i=7;i<11;i+=1){
        result += numberArray[i];
      }
      return result;
}