let str = 'h3 th2r2!'
let newArray = [];
let splitString = str.split(""); 
  for (let index in splitString) {
      if (splitString[index]===1) {
          splitString[index]='a';
      } else if (splitString[index]===2){
          splitString[index]='e';
      } else if (splitString[index]===3) {
          splitString[index]='i';
      } else if (splitString[index]===4) {
          splitString[index]='o';
      } else if (splitString[index]===5) {
          splitString[index]='u';
      } else {
      }
  newArray.push(splitString[index]);
  }  
  let joinArray = newArray.join(""); 
  console.log (joinArray);