// Code stretch 3/22/2021
const generateGrid = (row, col, val) => {
  let rslt = [];
  for (let i = 0; i < row; i++) {
    let r = new Array(col).fill(val);
    rslt.push(r);
  }
  return rslt;
};

console.log(generateGrid(2, 2, 3)); //[ [ 3, 3 ], [ 3, 3 ] ]
console.log(generateGrid(2, 5, 42)); //[ [ 42, 42, 42, 42, 42 ], [ 42, 42, 42, 42, 42 ] ]
console.log(generateGrid(1, 2, true)); //[ [ true, true ] ]
