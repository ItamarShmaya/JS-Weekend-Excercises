/*
Ex6.4 - isogram
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
a function that determines whether a string that contains only letters is an isogram. Assume the
empty string is an isogram. Ignore letter case.
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
  const regex = /^[a-zA-Z]+$/;
  const characters = {};
  const lowerCaseStr = str.toLowerCase();
  if(str === "") {
    return true;
  } else if(regex.test(lowerCaseStr)) {
    for(let i = 0; i < lowerCaseStr.length; i ++) {
      if(characters[lowerCaseStr[i]] === undefined) {
        characters[lowerCaseStr[i]] = 1;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return "aplabets only";
  }
}

console.log(isIsogram("Dermatoglyphics"));