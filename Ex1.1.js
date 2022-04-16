/*
Ex1.1 - Yes or No
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
string for false.
*/

function yesOrNo(boolean) {
  if(typeof boolean !== "boolean") {
    return "Not a Boolean"
  }
  if(boolean)
    return "Yes"
  else
    return "No";
}

console.log(yesOrNo(true));