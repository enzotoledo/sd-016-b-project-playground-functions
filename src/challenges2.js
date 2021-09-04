//Desafio 10
function techList (arrayTec,name){
  let listaTecnologia = [];
  let array = arrayTec.sort();

if(array.length === 0){
  return "Vazio!";
}
  for(let index in array){
      listaTecnologia.push({
        tech : array[index],
        name 
      });
  }
  return listaTecnologia;
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],"Lucas"));

// Desafio 11

  function generatePhoneNumber(arrayPhone) {
    let qtdRepete;

    if (arrayPhone.length !== 11){
      return 'Array com tamanho incorreto.';
     }
      for(let index of arrayPhone){// Para fazer a comparação foi preciso colocar um for dentro de outro 
        qtdRepete = 0; // A variável não inicializada zera aqui e não permite que o for seja realizado de novo após passar pelos ifs anteriores

        if(index < 0 || index > 9){
          return 'não é possível gerar um número de telefone com esses valores';
        }
          for(let index2 of arrayPhone){
            if(index2 === index){
              qtdRepete+=1;
            }
            if(qtdRepete>=3){
              return 'não é possível gerar um número de telefone com esses valores';
            }
          }
        }
        let phone = arrayPhone;
        phone.splice(0,0,"(");
        phone.splice(3,0,")");
        phone.splice(4,0," ");
        phone.splice(10,0,"-");
      
        return phone.join("");
  }
 

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a;
  let b;
  let c;
  let result = a+b+c;
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB -lineC))){
    return (a = true);
  } 
  if ((lineA > lineB + lineC) && (lineA > Math.abs(lineB -lineC))){
    return (a = false);
  } 
  if ((lineB < lineA + lineC) && (lineB < Math.abs(lineA - lineC))){
    return (b = true);
  }
  if ((lineB > lineA + lineC) && (lineB > Math.abs(lineA - lineC))){
    return (b =false);
  
  }
  if (lineC < lineA + lineB && lineC < Math.abs(lineA - lineB)){
    return (c = true);
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)){
    return (c = false);
  }
  return result;
}


// Desafio 13
function hydrate(string) {
  //Para extrair o número de uma string é preciso usar do método match
  // que é uma expressão regular que determnina a busca por dígitos em uma frase
  // /\d+/g (global flag/parar procurar todos)
  // Gera como resultado uma array dos resultados encontrados
  // Para transformar os elementos strings em Inteiros usa do termo parseInt();
  let reg = /\d+/g;
  let regString = string.match(reg);
  let regInt;
  let arrayInt = [];
  let sum = 0;

  for(let index = 0 ; index < regString.length ; index+=1){
    regInt = parseInt(regString[index]);
    arrayInt.push(regInt);
    sum+=arrayInt[index];
  }
  if(sum === 1){
    return (sum+" copo de água")
  }else{
    return (sum+" copos de água");
  }
  
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
