// Code stretch 3/17/2021
// countBy

Array.prototype.countBy = function (fn) {
  let array = this;
  if (fn !== undefined) {
    array = array.map(fn);
  }
  return array.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] = acc[item] + 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
};

const arr = [1, 2, 3, 3, 2, 32, 3, 3, 4, 5];

console.log(arr.countBy());
console.log(arr.countBy((num) => num % 3));

const arrOfStrings = [
  "abe",
  "banana",
  "compost",
  "accurate",
  "angery",
  "boister",
];

console.log(arrOfStrings.countBy((str) => str[0]));

/*
  {1: 1, 2: 2, 3: 4, 4: 1, 5: 1, 32: 1}
  {0: 4, 1: 2, 2: 4}
  {a: 3, b: 2, c: 1}
  */
