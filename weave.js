// Code stretch 03/07/2021
// write the function weave that takes in any number of arrays as arguments and returns 1 interwoven array.
// arrays can be different lengths, if you reach the end of a shorter array, use a null value in its place

function weave(arr1, arr2, ...args) {
  const listOfArray = [arr1, arr2, ...args];

  const length = listOfArray.reduce(
    (acc, arr) => (arr.length > acc ? arr.length : acc),
    0
  );
  let result = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < listOfArray.length; j++) {
      listOfArray[j][i] ? result.push(listOfArray[j][i]) : result.push(null);
    }
  }
  return result;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(weave(arr1, arr2));
// [1, 2, 3, 4, 5, 6];

const arr3 = [1, 4];
const arr4 = [2, 5, 7];
const arr5 = [3, 6, 8, 9, 10];
console.log(weave(arr3, arr4, arr5));
// [1, 2, 3, 4, 5, 6, null, 7, 8, null, null, 9, null, null, 10]
