/*
Implement Functionality
Ex7 - Implement The Following JS Methods -
Implement the following methods -
- Filter
- ForEach
- Map
Using only for(), array and objects (without other js methods)
Find Bugs \ Debug Code
Bug !!!!!
*/

const Array1 = {
  filter(arr, callBackFunction) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
      let value = arr[i];
      if(callBackFunction(value, i)) {
        newArray.push(value);
      }
    }
    return newArray;
  },
  forEach(arr, callBackFunction) {
    for(let i = 0; i < arr.length; i++) {
      let value = arr[i];
      callBackFunction(value, i);
    }
  },
  map(arr, callBackFunction) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
      let value = arr[i];
      newArray.push(callBackFunction(value, i));
    }
    return newArray;
  }
};


const arr = [1,2,3,4,5,6,7,8];
console.log(arr.map(x => x > 4));
console.log(Array1.map(arr, x => x > 4));