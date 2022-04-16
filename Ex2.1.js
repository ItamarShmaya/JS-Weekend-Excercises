/*
Ex2.1 - Sum of lowest numbers
Create a function that returns the sum of the two lowest positive numbers given an array of
minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumOfLowest(arr) {
  let lowestNum = arr[0];
  let lowestNum2 = arr[1];

  if(lowestNum2 < lowestNum) {
    let temp = lowestNum;
    lowestNum = lowestNum2;
    lowestNum2 = temp;
  }
  
  for(let i = 2; i < arr.length; i++) {
    if(lowestNum > arr[i]) {
      lowestNum2 = lowestNum;
      lowestNum = arr[i];
    } else if (lowestNum2 > arr[i]) {
      lowestNum2 = arr[i];
    }
  }
  return lowestNum + lowestNum2;
}

console.log(sumOfLowest([55,354,23,77,12312,1,243,2342]));
