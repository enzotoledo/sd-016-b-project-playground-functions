// Desafio 1
function compareTrue(value1, value2) {
  /**
   * Se o value1 e value2 forem boolean true, retorne boolean true. Caso contrário, retorne boolean false.
   * O operador AND compara dois valores e só resulta em verdadeiro se todos os operandos forem verdadeiros, ou seja, true ou truthy. Ele retorna o valor de um dos operandos especificados, e por isso posso usar o prefer-single-boolean-return sugerido pelo Linter, já que a entrada dos dois parâmetros do desafio são boleanos.
   * Usei o comparador de igualdade estrita para comparar valor e tipo.
   * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
   * Consultei o repositório de Stas Vilchik e usei a Compliant Solution.
   * Link: https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-single-boolean-return.md
   */
  let trueOrFalse = ((value1 === true) && (value2 === true));
  return trueOrFalse;
}

// Desafio 2
function calcArea(base, height) {
  // Calcula a área de um triângulo.
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(text) {
  /**
   * Converte uma string separadas por espaço em um array de strings.
   * Usei o split() method.
   * Ref: https://www.w3schools.com/js/js_string_methods.asp
  */
  let newArray = text.split(" "); // Separa a string onde há espaço.
  return newArray;
}

// Desafio 4
function concatName(list) {
  /**
   * Retorna o primeiro e o último item de uma array separados por vírgula.
   * O último item corresponde ao valor do último índice da array que é o comprimento da array - 1, e o primeiro item corresponde ao valor do índice 0 da array.
   * Usei o prefer-template ou tempĺate literals sugerido pelo Linter.
   * Ref: https://eslint.org/docs/2.0.0/rules/prefer-template
  */
  let lastAndFirst = `${list[list.length - 1]}, ${list[0]}`;
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  // Calcula a quantidade de pontos que um time marcou em um campeonato, em que uma vitória vale 3 pontos e um empate vale 1 ponto.
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  // A função retorna o número de vezes que o maior número foi repetido. Primeiro a função acessa cada posição da array para fim comparativo, verifica qual é o maior número da array e depois verifica quantas vezes ele foi repetido.
  let highestNumber = array[0];
  let repetitions = 0;
  for (let index = 1; index < array.length ; index += 1) {
    if (array[index] >= highestNumber) {
      highestNumber = array[index];
    }
  }
  for (let i = 0; i < array.length ; i += 1) {
    if (array[i] === highestNumber) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  // Uma vez que a array é iterável, é possível usar o o loop for/of.
  let newArray = [];
  for (let number of arrayOfNumbers) {
    if (((number % 3) === 0) && ((number % 5) === 0)) {
      newArray.push('fizzBuzz');
    } else if ((number % 3) === 0) {
      newArray.push('fizz');
    } else if ((number % 5) === 0) {
    newArray.push('buzz');
    } else {
    newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(text) {
  /**
   * Recebe um texto e substitui os caracteres: 'a' por 1, 'e' por 2, 'i' por 3, 'o' por 4 e 'u' por 5.
   * O charAt() method permite acessar o caractere de uma posição de uma string.
   * Ref: https://www.w3schools.com/js/js_string_methods.asp
  */
  let newText = '';
  for (let i = 0; i < text.length; i += 1) {
    if (text.charAt(i) == 'a') {
      newText += 1;
    } else if (text.charAt(i) === 'e') {
      newText += 2;
    } else if (text.charAt(i) === 'i') {
      newText += 3;
    } else if (text.charAt(i) === 'o') {
      newText += 4;
    } else if (text.charAt(i) === 'u') {
      newText += 5;
    } else {
      newText += text.charAt(i);
    }
  } 
  return newText;
}

function decode(text) {
  // Faz o oposto da função encode.
  let newText = '';
  for (let i = 0; i < text.length; i += 1) {
    if (text.charAt(i) == 1) {
      newText += 'a';
    } else if (text.charAt(i) == 2) {
      newText += 'e';
    } else if (text.charAt(i) == 3) {
      newText += 'i';
    } else if (text.charAt(i) == 4) {
      newText += 'o';
    } else if (text.charAt(i) == 5) {
      newText += 'u';
    } else {
      newText += text.charAt(i);
    }
  } 
  return newText;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
