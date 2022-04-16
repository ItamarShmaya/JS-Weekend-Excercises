/*
Ex5.3 - To Camel Case
Complete the method/function so that it converts dash/underscore delimited words into camel
casing. The first word within the output should be capitalized only if the original word was
capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str) {
  if(str.indexOf("-") !== -1) {
    return camelCasing(str, "-");
  } else if(str.indexOf("_") !== -1) {
    return camelCasing(str, "_");
  }
}

console.log(toCamelCase("ThE-stEalth-warrior"));


function camelCasing(str, divider) {
  let strArray = str.split(divider);
  strArray[0] = strArray[0].slice(0,1) + strArray[0].slice(1).toLowerCase();
  for(let i = 1; i < strArray.length; i++) {
    strArray[i] = strArray[i].slice(0,1).toUpperCase() + strArray[i].slice(1).toLowerCase();
  }
  return strArray.join("")
}