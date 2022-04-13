function yesOrNo(boolean) {
  if(typeof boolean !== "boolean") {
    return "Not a Boolean"
  }
  if(boolean)
    return "Yes"
  else
    return "No";
}