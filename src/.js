function fizzBuzz(numeros) {
    //let numeros = [2, 15, 7, 9, 45];
    //let strings = ''; 
      //let results = '';
      let newArray = [];

    for (let index in numeros) {
        if ((numeros[index]%3===0) && (numeros[index]%3===0)) {
            string = 'fizzBuzz'
          } else if (numeros[index]%3===0)  {
            string = 'fizz'
          } else if (numeros[index]%5===0) {
            string = 'buzz';
          } else {
            string = 'bug';
          }
          newArray.push(string);
          //console.log (newArray);
          //console.log (newArray.push(string));
        } 
   return newArray;
}
    
    fizzBuzz([2, 15, 7, 9, 45]); 

/*     let numeros = [2, 15, 7, 9, 45];
    let string = 'bug'
    numeros.push(string)
    console.log (numeros) 
    
    let numbers = [];
    numbers.push (randomNumber(60));

    */
 