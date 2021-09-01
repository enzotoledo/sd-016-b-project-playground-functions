


let codeFrase = 'hi there!';

function encode (codeFrase) {
    let code = {
      a : 1,
      e : 2,
      i : 3,
      o : 4,
      u : 5
    }
    for (let index of codeFrase){
      for (let key in code){
      if (codeFrase[index] === key){
       codeFrase[index].push(code[key]);
      }
     }
    }
    return encode (codeFrase);
  }
  console.log(encode (codeFrase));