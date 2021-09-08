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

// function contaNumero(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
  
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
      
//     }
//     contNumero = 0;
//   }
//   return contRepetido;
// }
// console.log(contaNumero([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]));

// Desafio 11
function generatePhoneNumber(numerosArray) {
  // seu código aqui
  let contRepetido = 0;
  let contNumero = 0;
  for (let index in numerosArray) {
    let verificaNumeros = numerosArray[index];
    for (let index2 in numerosArray) {
      if (verificaNumeros === numerosArray[index2]) {
        contNumero += 1;
      } 
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
    }
    contNumero = 0;
  } 
  // return contRepetido;
  if (numerosArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index3 = 0; index3 < numerosArray.length; index3 += 1) {
    if (numerosArray[index3] < 0 || numerosArray[index3] > 9 || contRepetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let DDD = 0;
  let numeroPrimeiraParte = 0;
  let numeroSegundaParte = 0;
  let numeroFinal = 0;
  for (let index4 = 0; index4 < numerosArray.length; index4 += 1) {
    DDD = numerosArray.slice(0, 2).join('');
    numeroPrimeiraParte = numerosArray.slice(2, 7).join('');
    numeroSegundaParte = numerosArray.slice(7, 11).join('');
  }
  numeroFinal = '(' + DDD + ') ' + numeroPrimeiraParte + '-' + numeroSegundaParte;
  return numeroFinal;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
