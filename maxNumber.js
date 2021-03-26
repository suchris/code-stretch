// Code stretch 3/26/2021
// return maximum number that can be constructed from digits of number pass in
function maxNumber(num) {
  const nums = num.toString().split("");
  return nums.sort((a, b) => b - a).join("");
}

console.log(maxNumber(7389)); // 9873
console.log(maxNumber(566797)); // 977665
