/* var myString = 'abc123.8<blah>';

myString = myString.replace(/\D/g,'');

console.log (myString)
 */

var regex = /\d+/g;
var string = "you can enter maximum 500 choices or 12 alternatives";
var matches = string.match(regex);  // creates array from matches

console.log(matches);
console.log(matches[0]+matches[1]);

var a = "you can enter maximum 500 choices or 12 alternatives";
var b = a.split(',').map(Number);
