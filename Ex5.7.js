/*
Ex5.7 - shortest words
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function shortestWord(str) {
  let strArray = str.split(" ");
  let shortestWord = strArray[0].length;
  for(let word of strArray) {
    if(word.length < shortestWord) {
      shortestWord = word.length;
    }
  }
  return shortestWord;
}

console.log(shortestWord("as"));