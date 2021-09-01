// Desafio 10
function techList(array, name) {
    var ordened = array.sort();
    var newList = [];
    if (array.length > 0) {
        for (let key in array) {
            newList.push({ tech: array[key], name: name })
        }
    } else return 'Vazio!'

    return newList;
}

// Desafio 11
function generatePhoneNumber(array) {
    let phoneNumber = '';
    let ddd = '';
    let first = '';
    let second = '';


    if (array.length !== 11) {
        return 'Array com tamanho incorreto.'
    }

    for (index = 0; index < array.length; index++) {
        let contador = 0;
        for (b = 0; b < array.length; b++) {
            if (array[index] === array[b]) {
                contador++;
            }
        }
        if (array[index] < 0 || array[index] > 9 || contador >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';

        } else phoneNumber += array[index];
    }

    for (index = 0; index < 2; index++)
        ddd += phoneNumber[index];

    for (index = 2; index < 7; index++)
        first += phoneNumber[index];

    for (index = 7; index < 11; index++)
        second += phoneNumber[index];




    return '(' + ddd + ')' + ' ' + first + '-' + second;

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