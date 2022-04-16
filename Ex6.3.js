/*
Ex6.3 - organize strings
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(str1, str2) {
  const combined = (str1 + str2).toLowerCase();
  const characters = {};

  for(let i = 0; i < combined.length; i ++) {
    if(characters[combined[i]] === undefined) {
      characters[combined[i]] = 1;
    }
  }
  return Object.keys(characters).sort().join("");
}


console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));