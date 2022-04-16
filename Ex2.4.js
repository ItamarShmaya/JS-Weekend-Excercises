/*
Ex2.4 - Unique
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
*/

function unique(arr) {
  let firstNum = arr[0];
  for(let i = 1; i < arr.length; i++)  {
    let nextNum = arr[i]; 
    if(firstNum !== nextNum) {
      if(i === arr.length - 1 ) {
          return nextNum;
      } else if(firstNum === arr[i+1]) {
          return nextNum;
        } else {
          return firstNum;
        }
    }
  }
}

console.log(unique([1,1,1,1,1,1,1,1,1,1,1,1,1,3]));
console.log(unique([1,1,1,1,1,1,1,1,1,3,1,1,1,1]));
console.log(unique([3,1,1,1,1,1,1,1,1,1,1,1,1,1]));