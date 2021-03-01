/* 
The "digital root" of a number is the single-digit recursive sum of all of its digits.
For example:
345 --> 3 + 4 + 5 --> 12 --> 1 + 2 --> 3
493193 --> 4 + 9 + 3 + 1 + 9 + 3 --> 29 --> 2 + 9 --> 11 --> 1 + 1 --> 2
Write a function that takes in a positive integer and returns the digital root.
*/

//TODO
function digitalRoot(num) {
  const digits = num.toString().split("");
  if (digits.length === 1) return num;
  return digitalRoot(digits.reduce((acc, d) => acc + parseInt(d), 0));
}

console.log(digitalRoot(493193)); //2
console.log(digitalRoot(345)); //3
console.log(digitalRoot(837)); //9
