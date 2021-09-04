
//function hydrate(str) {
//let str = '1 cachaça, 5 cervejas e 1 copo de vinho'
let num = str.replace(/\D/g,'');
let numbers = num.split('').map(Number);
//console.log (numbers);
let soma = 0;

for (let index in numbers) {
      soma +=numbers[index];
      }
      //console.log (soma);
    
if (soma =1) {
  return soma+' copo de água';
} else {
  return soma+' copos de água';
}

/* 
Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos: 
String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
  */