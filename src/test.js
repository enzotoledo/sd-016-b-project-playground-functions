function decode(str) {
  let newStr = '';
  let objectRef = { a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 };
  for (let i = 0; i < str.length; i += 1) {
    let actLett = str[i];
    for (let key in objectRef) {
      if (actLett == objectRef[key]) {
        let newLett = key;
        actLett = newLett;
        break;
      }
    }
    newStr += actLett;
  }
  console.log(newStr);
}
decode('h2ll4');