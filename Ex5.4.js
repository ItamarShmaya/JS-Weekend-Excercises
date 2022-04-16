/*
Ex5.4 - To Weird Case
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
string with all even indexed characters in each word upper cased, and all odd indexed
characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
index is even, therefore that character should be upper cased.
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
be present if there are multiple words. Words will be separated by a single space(' ').
Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(str) {
  let newString = "";
  let remainder = 0;
  for(let i = 0; i < str.length; i ++) {
    if(str[i] === " ") {
      if(i % 2 === 0) {
        remainder = 1;
      } else if( i % 2 === 1) {
        remainder = 0;
      }
    }
    if( i % 2 === remainder)
      newString += str.slice(i, i+1).toUpperCase();
    else 
      newString += str.slice(i, i+1).toLowerCase();
  }
  return newString;
}

// const toWeirdCase = (str) => {
//   let counter = 0;
//   return str
//     .split("")
//     .map((char) => {
//       if (char === " " && counter % 2 === 0) {
//         counter += 2;
//         return char;
//       }
//       if (counter % 2) {
//         counter++;
//         return char.toLowerCase();
//       } else {
//         counter++;
//         return char.toUpperCase();
//       }
//     })
//     .join("");
// };

console.log(toWeirdCase("Weird string cases sss ss sss ss ssss s"));