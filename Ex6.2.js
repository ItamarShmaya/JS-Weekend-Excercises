/*
Ex6.2 - Counting Duplicates
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and
numeric digits that occur more than once in the input string. The input string can be assumed to
contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function countingDuplicates(str) {
  const characters = {};
  let duplicateCounter = 0;
  let duplicateChars = [];
  const lowerCaseStr = str.toLowerCase();
  for(let i = 0; i < lowerCaseStr.length; i++) {
    if(characters[lowerCaseStr[i]] === undefined) {
      characters[lowerCaseStr[i]] = 1;
    } else {
      characters[lowerCaseStr[i]]++;
      if(characters[lowerCaseStr[i]] === 2 ) {
        duplicateCounter++;
        duplicateChars.push(`'${lowerCaseStr[i]}'`);
      }
    }
  }
  return `${duplicateCounter} # ${duplicateChars.join(", ")}`;
}

console.log(countingDuplicates("asdl23346lgfghkraafvczzkm"));