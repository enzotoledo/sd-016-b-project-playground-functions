// Desafio 10
function techList(newTechs,name) {

  let vetorOrganizado = newTechs.sort();
  let vetorObjetos = [];

  if(newTechs.length < 1){
    return "Vazio!";
  }

  for(let i = 0; i < newTechs.length; i++){

    
    let objeto = {

      tech: vetorOrganizado[i],
      name: name

    };

    vetorObjetos[i] = objeto;

  }
  
  return vetorObjetos;
  
}

function verificaDuplicados(numero, arrayTel){

  let cont = 0;

  for(let num of arrayTel){

    if(num === numero){
      cont++;
    }

  }

  return cont;

}

// Desafio 11
function generatePhoneNumber(arrayTel) {

  if(arrayTel.length != 11){
    return "Array com tamanho incorreto."
  }

  for(let i = 0 ; i < arrayTel.length ; i++){

    if((arrayTel[i]<0) || (arrayTel[i]>9)){
      return "não é possível gerar um número de telefone com esses valores"
    } 

    if(verificaDuplicados(arrayTel[i], arrayTel) >= 3){
      return "não é possível gerar um número de telefone com esses valores"
    }
     
      
  }
  
  return "("+arrayTel[0]+arrayTel[1]+")"+" "+arrayTel[2]+arrayTel[3]+arrayTel[4]+arrayTel[5]+arrayTel[6]+"-"+arrayTel[7]+arrayTel[8]+arrayTel[9]+arrayTel[10]

  }



// Desafio 12
function triangleCheck(lineA,lineB,lineC) {

  if(((lineA > (lineB+lineC)) || (lineB > (lineA+lineC)) || (lineC > (lineA+lineB)))){
    return false;
  }else{
    return true;
  }


}

// Desafio 13
function hydrate(string) {

  let arrayResposta = string.split('');
  let soma = 0;
  
  for(let i = 0 ; i < string.length ; i++){
    
    switch(string[i]){

      case '1':
        soma = soma + 1;
        break;

      case '2':
        soma = soma + 2;
        break;

      case '3':
        soma = soma + 3;
        break;
        
      case '4':
        soma = soma + 4;
        break;
        
      case '5':
        soma = soma + 5;
        break;
        
      case '6':
        soma = soma + 6;
        break;
        
      case '7':
        soma = soma + 7;
        break;
        
      case '8':
        soma = soma + 8;
        break;
        
      case '9':
        soma = soma + 9;
        break;  
    }

  }

  if(soma === 1){
    return soma + " copo de água";
  }
    return soma + " copos de água";
   

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
