// Code streth 03/13/2021

const locateTheMiddle = (array) => {
  //code here
  if (array.length !== 3)
    return `Please provide an array of 3 numbers, there's ${array.length} items in this array`;

  // turn the number array into object with integer value as keys and index in the array as values
  const nObj = array.reduce((acc, n, idx) => {
    acc[n] = idx;
    return acc;
  }, {});

  return nObj[Object.keys(nObj).sort((a, b) => a - b)[1]];
};

console.log(locateTheMiddle([6, 4, 9])); // 0
console.log(locateTheMiddle([10, 8, 9])); // 2
