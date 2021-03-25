// Code stretch 3/24/2021
// return an index if left sum of an array equals to right sum of an array ( not inclusive )
function equalSides(array) {
  if (array.length === 0) return -1;

  let leftSum = 0;
  let rightSum = array
    .filter((a, idx) => idx > 0)
    .reduce((acc, a) => acc + a, 0);
  if (array.length === 1 || leftSum === rightSum) return 0;

  for (let i = 1; i < array.length; i++) {
    leftSum = leftSum + array[i - 1];
    rightSum = rightSum - array[i];

    if (leftSum === rightSum) return i;
  }

  return -1;
}

console.log(equalSides([2, 3, 1, 3, 1, 1])); // 2
console.log(equalSides([8, 4, 3, 2, 2, 9])); // -1
console.log(equalSides([7, 1, 6, -3, -4])); // 0
console.log(equalSides([1])); // 0
