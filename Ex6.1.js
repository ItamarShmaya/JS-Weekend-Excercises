/*
Ex6.1 - Mumbling
This time no story, no theory. The examples below show you how to write function
accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// function accum(str) {
//   let strArray = str.split("");
//   let array = [];
//   for(let i = 0; i < strArray.length; i++) {
//     array.push(strArray[i].toUpperCase() + strArray[i].toLowerCase().repeat(i));
//   }
//   return array.join("-");
// }

function accum(str) {
  if(typeof str === "string")
  {
    const regex = /^[a-zA-Z]+$/;
    const lowerCaseStr = str.toLowerCase();
    let strArray = lowerCaseStr.split("");
    strArray[0] = strArray[0].toUpperCase();
    if(regex.test(lowerCaseStr)) {
      for(let i = 1; i < strArray.length; i ++) {
        for(let j = 0; j < i; j++) {
          strArray[i] += lowerCaseStr[i];
        }
        strArray[i] = strArray[i].slice(0,1).toUpperCase() + strArray[i].slice(1)
      }
      return strArray.join("-");
    } else {
      return "use only a string containing alphabet";
    }
  } else {
    return "use only a string";
  }
}


console.log(accum("asfdflo"));
