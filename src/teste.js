function hydrate(string) {
    let reg = /\d+/g;
    let result = string.match(reg);
    let numbers = [];
    let sum = 0;
    for ( let index = 0 ; index < result; i += 1){
      numbers += parseInt(result[index]);
    }
    for(let key of numbers){
    sum = sum + numbers[key];
    if (sum === 1){
        return sum = sum + ' copo de água';
    } else {
        return sum = sum + ' copos de água';
    }
    }
    return sum;
    }