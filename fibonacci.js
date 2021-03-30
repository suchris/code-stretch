// Code stretch 3/29/21
// Create fibonnaci using recursive and iterative
const fibonacci = (num) => {
  if (num < 0) console.error(`invalid input number ${num} is less than 0`);
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

const fibonacci_iteration = (num) => {
  let array = [0, 1];
  for (let i = 2; i < num + 1; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array[num];
};

console.log(fibonacci(13));
console.log(fibonacci_iteration(13));
