// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let arrayOrdenada = tech.sort();
  let array = [];

  if (arrayOrdenada.length === 0) {
    return 'Vazio!';
  } else if (arrayOrdenada.length > 0) {
    for(let index in arrayOrdenada) {
      array.push({
        tech: arrayOrdenada[index],
        name: name,
      })
    }
  }
  return array;
}
console.log(techList(
  ["React", "Jest", "HTML", "CSS", "JavaScript"],
  "Lucas"));


  
// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  // let numeroQueMaisAparece = 0;
  // let vezesQueAparece = 0;

  // for (let index = 0; index < numeros.length; index += 1) {
  //   if (numeros[index] === numeros[index]) {
  //       numeroQueMaisAparece = numeros[index];
  //   }
  // }
  // for (let i = 0; i < numeros.length; i += 1) {
  //   if (numeros[i] === numeroQueMaisAparece) {
  //       vezesQueAparece += 1;
  //   }
  // }
 
  // for (let index =0; index < numeros.length; index += 1) {
  //   if (numeros[index] > 9 || numeros[index] < 0 || vezesQueAparece >= 3) {
  //     return 'não é possível gerar um número de telefone com esses valores';
  //   } else if (numeros.length !== 11) {
  //     return 'Array com tamanho incorreto.';
  //   } 
  // }

}
console.log(generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(valor1, valor2, valor3) {
  // seu código aqui
  if (valor1 > valor2 + valor3 && valor1 < Math.abs(valor1 + valor2 + valor3)) {
    return false;
  } else if (valor2 > valor1 + valor3 && valor2 < Math.abs(valor1 + valor2 + valor3)) {
    return false;
  } else if (valor3 > valor1 + valor2 && valor3 < Math.abs(valor1 + valor2 + valor3)) {
    return false;
  } else if (valor1 < valor2 + valor3) {
    return true;
  } else if (valor2 < valor1 + valor3) {
    return true;
  } else if (valor3 < valor1 + valor2) {
    return true;
  }
}
console.log(triangleCheck(10, 13, 2));

// Desafio 13
function hydrate(stringBebidas) {
  let testando = stringBebidas.split();
  let resultadoo = testando[0].match(/\d+/gi).map(Number);
  let coposDeAgua = 0;

  for (let index = 0; index < resultadoo.length; index += 1) {
    coposDeAgua += resultadoo[index];
  }

  if (coposDeAgua <= 1) {
      return coposDeAgua + ' copo de água';
    } else if (coposDeAgua >= 2) {
      return coposDeAgua + ' copos de água';
    }
  
  
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
