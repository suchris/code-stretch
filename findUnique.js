// Code stretch 03/04/2021
// Write the function findUnique that takes an array of numbers
// and returns the number that appears only once in the array.

const findUnique = (numArray) => {
  let numObj = {};
  numObj = numArray.reduce((acc, num) => {
    if (acc.hasOwnProperty(num)) {
      acc[num] = acc[num] + 1;
    } else {
      acc[num] = 1;
    }
    return acc;
  }, {});
  let uniqueNum;
  for (let key in numObj) {
    if (numObj[key] === 1) {
      uniqueNum = key;
      break;
    }
  }
  return uniqueNum;
};

console.log(findUnique([1, 1, 1, 2, 1, 1]));
// => 2
console.log(findUnique([1, 2, 4, 1, 4, 2, 3, 3, 5, 6, 1, 6, 2, 4]));
// => 5
