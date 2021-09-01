// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(arrayOnzeNum) {
    var invalidNumber = true;
    var tamArray = arrayOnzeNum.length;
    var numberOk = 0;
    if(tamArray == 11){
        let selectNumber = true;
        for(var index = 0; (index < arrayOnzeNum.length) && (invalidNumber); index++){
            var repeat = 0;
            if(arrayOnzeNum[index] < 0 || arrayOnzeNum[index] > 9){
                invalidNumber = false;
                numberOk = 1;
            }else{
                for(var i = 0; i < arrayOnzeNum.length; i++){
                    if(arrayOnzeNum[index] === arrayOnzeNum[i]){
                        repeat++;
                        if(repeat == 3){
                            invalidNumber = false;
                            numberOk = 1;
                        }
                    }
                }
            }
        }if(numberOk != 0){
            return "não é possível gerar um número de telefone com esses valores";
        }else{
            let phoneOK = "(";
            for(let cont = 0; cont < arrayOnzeNum.length; cont++){
                var tempTostr = arrayOnzeNum[cont];
                tempTostr = tempTostr.toString();
                switch (cont) {
                    case 1:
                        phoneOK += tempTostr + ') ';
                      break;
                    case 6:
                        phoneOK += tempTostr + '-';
                      break;
                    default:
                        phoneOK += tempTostr;
                  }
            }  return phoneOK;          
        }
    }else{
        return "Array com tamanho incorreto.";
    }
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
