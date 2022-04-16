/*
Ex5.5 - Abbreviate two words
Write a function to convert a name into initials. This kata strictly takes two words with one space
in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
*/

function initials(str) {
  let spaceIndex = str.indexOf(" ");
  return str[0].toUpperCase() + "." + str[spaceIndex+1].toUpperCase();
}

console.log(initials("Patrick Feeney"));