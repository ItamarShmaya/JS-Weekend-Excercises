/*
Ex5.2 - String Repeat
Write a function called repeat_str which repeats the given string src exactly count times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

// function repeatStr(n, str) {
//   return str.repeat(n);
// }

function repeatStr(n, str) {
  let newStr = "";
  if(typeof str === "string" && isValidNumber(n)) {
    for(let i = 0; i < n; i ++) {
      newStr += str;
    }
  } else {
    return "Invalid input";
  }
  return newStr;
}

function isValidNumber(number) {
  return (typeof number === "number") && (number > 0) && (number % 1 === 0) ;
}

console.log(repeatStr(5, "Hello"));